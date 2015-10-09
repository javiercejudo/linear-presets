/*jshint node:true, mocha:true */

'use strict';

require('should');

var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var rescale = require('rescale')(Decimal).rescale;
var presets = require('../src/linear-presets').PRESETS;
var presetFactory = require('linear-preset-factory');

var convert = function convert(x, preset) {
  return Number(rescale(preset[0], preset[1], x));
};

var invert = function invert(preset) {
  return preset.slice().reverse();
};

describe('built-in presets', function() {
  it('should include metric prefixes', function() {
    presets.metricPrefixes.conversions.should.have.keys([
      'none',
      'yotta',
      'zetta',
      'exa',
      'peta',
      'tera',
      'giga',
      'mega',
      'kilo',
      'hecto',
      'deca',
      'deci',
      'centi',
      'milli',
      'micro',
      'nano',
      'pico',
      'femto',
      'atto',
      'zepto',
      'yocto'
    ]);
  });

  it('should include length', function() {
    presets.length.conversions.should.have.keys([
      'metre',
      'kilometre',
      'centimetre',
      'millimetre',
      'mile',
      'yard',
      'foot',
      'inch',
      'mile',
      'nauticalMile'
    ]);

    presets.distance.should.eql(presets.length);
  });

  it('should include mass', function() {
    presets.mass.conversions.should.have.keys([
      'kilogram',
      'metricTon',
      'gram',
      'milligram',
      'microgram',
      'longTon',
      'shortTon',
      'stone',
      'pound',
      'ounce'
    ]);
  });

  it('should include time', function() {
    presets.time.conversions.should.have.keys([
      'second',
      'nanosecond',
      'microsecond',
      'millisecond',
      'minute',
      'hour',
      'day',
      'week',
      'month',
      'year',
      'decade',
      'century',
      'millennium'
    ]);
  });

  it('should include electric current', function() {
    presets.electricCurrent.conversions.should.have.keys([
      'ampere',
      'abampere'
    ]);
  });

  it('should include temperature', function() {
    presets.temperature.conversions.should.have.keys([
      'celsius',
      'fahrenheit',
      'kelvin',
      'rankine',
      'delisle',
      'newton',
      'reaumur',
      'romer',
    ]);
  });

  it('should include temperature difference', function() {
    presets.temperatureDifference.conversions.should.have.keys([
      'celsius',
      'fahrenheit',
      'kelvin',
      'rankine',
      'delisle',
      'newton',
      'reaumur',
      'romer',
    ]);
  });

  it('should include amount of substance', function() {
    presets.amountOfSubstance.conversions.should.have.keys([
      'mole',
      'poundMole'
    ]);
  });

  it('should include luminous intensity', function() {
    presets.luminousIntensity.conversions.should.have.keys([
      'candela',
      'candlepower',
      'hefnerkerze'
    ]);
  });

  it('should include velocity', function() {
    presets.velocity.conversions.should.have.keys([
      'metresSecond',
      'milesHour',
      'feetSecond',
      'kilometresHour',
      'knot'
    ]);
  });

  it('should include volume', function() {
    presets.volume.conversions.should.have.keys([
      'cubicMetre',
      'millilitre',
      'litre',
      'cubicInch',
      'cubicFoot',
      'imperialFluidOunce',
      'imperialGill',
      'imperialPint',
      'imperialQuart',
      'imperialGallon',
      'USDram',
      'USFluidOunce',
      'USGill',
      'USCup',
      'USPint',
      'USQuart',
      'USGallon'
    ]);
  });

  it('should include area', function() {
    presets.area.conversions.should.have.keys([
      'squareMetre',
      'squareKilometre',
      'hectare',
      'squareMile',
      'acre',
      'squareYard',
      'squareFoot',
      'squareInch'
    ]);
  });

  it('should include plane angle', function() {
    presets.angle.conversions.should.have.keys([
      'radian',
      'turn',
      'degree',
      'gradian'
    ]);
  });

  it('should include digital storage', function() {
    presets.digitalInformation.conversions.should.have.keys([
      'byte',
      'bit',
      'kibibyte',
      'mebibyte',
      'gibibyte',
      'tebibyte',
      'pebibyte',
      'exbibyte',
      'zebibyte',
      'yobibyte'
    ]);
  });
});
