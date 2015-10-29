should-code-eql
===

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/should-code-eql.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/should-code-eql?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/should-code-eql.png)](https://travis-ci.org/LingyuCoder/should-code-eql)
[![Dependency Status](https://david-dm.org/LingyuCoder/should-code-eql.svg)](https://david-dm.org/LingyuCoder/should-code-eql)
[![devDependency Status](https://david-dm.org/LingyuCoder/should-code-eql/dev-status.svg)](https://david-dm.org/LingyuCoder/should-code-eql#info=devDependencies)
[![License](http://img.shields.io/npm/l/should-code-eql.svg?style=flat-square)](LICENSE)

A shouldjs plugin to assert code equality, whether it`s formatted or not.

## Installation

```bash
$ npm install --save-dev should
$ npm install --save-dev should-code-eql
```

## Usage

```javascript
require('should');
require('should-code-eql');

describe('...', function() {
  it('...', function() {
    source.should.codeEql(expected);
  });
});
```

## License
