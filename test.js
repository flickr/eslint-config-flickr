// Copyright 2021 SmugMug, Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

var config = require(__dirname);
var assert = require('assert');

/* eslint-env mocha */

describe('🔵🔴', function () {

  it('extends eslint:recommended', function () {
    assert.strictEqual(config.extends, 'eslint:recommended');
  });

  it('exports default rules', function () {
    assert.strictEqual(typeof config.rules, 'object');
  });

});
