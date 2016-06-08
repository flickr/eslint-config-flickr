# eslint-config-flickr

Flickr's cool [eslint][1] config.

[![Build Status](https://travis-ci.org/flickr/eslint-config-flickr.svg?branch=master)](https://travis-ci.org/flickr/eslint-config-flickr)

## install

```
$ npm install eslint-config-flickr --save-dev
```

## usage

We use a superset of `eslint:recommended`. In your `.eslintrc.js` (or whatever):

``` js
module.exports = {

  extends: 'flickr'

};
```

More info [here][2].

## license

This software is free to use under the MIT license. See the [LICENSE][] file for license text and copyright information.

[1]: http://eslint.org
[2]: http://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config
[LICENSE]: https://github.com/flickr/eslint-config-flickr/blob/master/LICENSE
