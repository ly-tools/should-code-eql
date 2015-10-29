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

## Test

```bash
$ npm run test
$ npm run test-cov
$ npm run test-travis
```

## License

The MIT License (MIT)

Copyright (c) 2015 天镶

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
