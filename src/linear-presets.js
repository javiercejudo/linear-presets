/*jshint node:true */

'use strict';

var presets = require('../data/presets.json');

presets.temperature = require('linear-presets-temperature')

exports.PRESETS = presets;
