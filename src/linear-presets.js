/*jshint node:true */

'use strict';

var presets = {
  amountOfSubstance: require('linear-presets-amount-of-substance'),
  angle: require('linear-presets-angle'),
  area: require('linear-presets-area'),
  digitalInformation: require('linear-presets-digital-information'),
  electricCurrent: require('linear-presets-electric-current'),
  length: require('linear-presets-length'),
  luminousIntensity: require('linear-presets-luminous-intensity'),
  mass: require('linear-presets-mass'),
  metricPrefixes: require('linear-presets-metric-prefixes'),
  temperature: require('linear-presets-temperature'),
  temperatureDifference: require('linear-presets-temperature-difference'),
  time: require('linear-presets-time'),
  velocity: require('linear-presets-velocity'),
  volume: require('linear-presets-volume')
};

// aliases
presets.distance = presets.length;

exports.PRESETS = presets;
