/*jshint node:true */

'use strict';

var presets = require('../data/presets.json');

presets.metricPrefixes = require('linear-presets-metric-prefixes');
presets.temperature = require('linear-presets-temperature');
presets.temperatureDifference = require('linear-presets-temperature-difference');
presets.distance = require('linear-presets-length');
presets.mass = require('linear-presets-mass');
presets.time = require('linear-presets-time');
presets.area = require('linear-presets-area');

exports.PRESETS = presets;
