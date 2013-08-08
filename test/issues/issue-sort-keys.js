'use strict';
/*global it */


var assert = require('assert');
var fs = require('fs');
var path = require('path');
var yaml  = require('../../lib/js-yaml');

it('Keys should be sorted lexically if sortKeys is true', function () {
  var data = require('./data/issue-sort-keys.unsorted.yml');
  var yamlText = fs.readFileSync(path.join(__dirname, 'data/issue-sort-keys.sorted.yml'), {encoding: 'utf8'});

  assert.equal(yaml.dump(data, {sortKeys: true}), yamlText);
});
