// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

var config = require(__dirname);
var assert = require('assert');

/* eslint-env mocha */

describe('🔵🔴', function () {

  it('extends eslint:recommended', function () {

    assert.equal(config.extends, 'eslint:recommended');

  });

  it('exports default rules', function () {

    assert.equal(typeof config.rules, 'object');

  });

});
