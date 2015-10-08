/*jshint node:true */

'use strict';

var presets = require('../data/presets.json');

presets.angle = require('linear-presets-angle');
presets.area = require('linear-presets-area');
presets.digitalInformation = require('linear-presets-digital-information');
presets.electricCurrent = require('linear-presets-electric-current');
presets.length = require('linear-presets-length');
presets.mass = require('linear-presets-mass');
presets.metricPrefixes = require('linear-presets-metric-prefixes');
presets.temperature = require('linear-presets-temperature');
presets.temperatureDifference = require('linear-presets-temperature-difference');
presets.time = require('linear-presets-time');
presets.velocity = require('linear-presets-velocity');
presets.volume = require('linear-presets-volume');

// aliases
presets.distance = presets.length;

exports.PRESETS = presets;
