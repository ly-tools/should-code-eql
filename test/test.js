'use strict';

var should = require('should');
require('../index');
var fs = require('fs');
var path = require('path');
var AssertionError = should.AssertionError;

describe('should-code-eql', function() {
  it('code equality', function() {
    var code = fs.readFileSync(path.join(__dirname, 'equality', 'code.js'), 'utf-8');
    var expected = fs.readFileSync(path.join(__dirname, 'equality', 'expected.js'), 'utf-8');
    code.should.codeEql(expected);
  });
  it('code equality error report', function() {
    var code = fs.readFileSync(path.join(__dirname, 'error', 'code.js'), 'utf-8');
    var expected = fs.readFileSync(path.join(__dirname, 'error', 'expected.js'), 'utf-8');
    try {
      code.should.codeEql(expected);
    } catch (e) {
      e.should.instanceof(AssertionError);
    }
  });
});
