/*jshint node:true */

'use strict';

var presets = require('../data/presets.json');

presets.temperature = require('linear-presets-temperature')
presets.temperatureDifference = require('linear-presets-temperature-difference')

exports.PRESETS = presets;
