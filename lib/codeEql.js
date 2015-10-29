'use strict';
var Esprima = require('esprima');
var Escodegen = require('escodegen');
var eql = require('should-equal');
var type = require('should-type');

function formatCode(code) {
  return Escodegen.generate(Esprima.parse(code, {
    loc: false,
    range: false,
    raw: false,
    comment: false
  }));
}

module.exports = function(should, Assertion) {
  Assertion.add('codeEql', function(expected, description) {
    var code = this.obj;
    var expectedCode = expected;
    try {
      code = formatCode(code);
      expectedCode = formatCode(expectedCode);
    } catch (e) {
      throw e;
    }
    this.params = {
      obj: code,
      operator: 'to code equal',
      expected: expectedCode,
      message: description
    };
    var result = eql(code, expectedCode, should.config);
    this.params.showDiff = eql(type(code), type(expectedCode)).result;
    this.assert(result.result);
  });
};
