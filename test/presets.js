/*jshint node:true, mocha:true */

'use strict';

var should = require('should');
var rescale = require('rescale').rescale;
var presets = require('../src/linear-presets').PRESETS;

var convert = function convert(x, preset) {
  return rescale(x, preset[0], preset[1]);
};

var invert = function invert(preset) {
  return preset.slice(0).reverse();
};

describe('built-in presets', function() {
  it('should include metric prefixes', function() {
    presets.metricPrefixes.should.have.keys([
      'noneToYotta',
      'noneToZetta',
      'noneToExa',
      'noneToPeta',
      'noneToTera',
      'noneToGiga',
      'noneToMega',
      'noneToKilo',
      'noneToHecto',
      'noneToDeca',
      'noneToDeci',
      'noneToCenti',
      'noneToMilli',
      'noneToMicro',
      'noneToNano',
      'noneToPico',
      'noneToFemto',
      'noneToAtto',
      'noneToZepto',
      'noneToYocto'
    ]);
  });

  it('should include length', function() {
    presets.distance.should.have.keys([
      'metreToKilometre',
      'metreToCentimetre',
      'metreToMillimetre',
      'metreToMile',
      'metreToYard',
      'metreToFoot',
      'metreToInch',
      'metreToNauticalMile'
    ]);
  });

  it('should include mass', function() {
    presets.mass.should.have.keys([
      'kilogramToMetricTon',
      'kilogramToGram',
      'kilogramToMilligram',
      'kilogramToMicrogram',
      'kilogramToLongTon',
      'kilogramToShortTon',
      'kilogramToStone',
      'kilogramToPound',
      'kilogramToOunce'
    ]);
  });

  it('should include time', function() {
    presets.time.should.have.keys([
      'secondToNanosecond',
      'secondToMicrosecond',
      'secondToMillisecond',
      'secondToMinute',
      'secondToHour',
      'secondToDay',
      'secondToWeek',
      'secondToMonth',
      'secondToYear',
      'secondToDecade',
      'secondToCentury',
      'secondToMillennium'
    ]);
  });

  it('should include electric current', function() {
    var current = presets.electricCurrent;

    convert(10, current.ampereToAbampere).should.be.exactly(1);
    convert(0, current.ampereToAbampere).should.be.exactly(0);
  });

  it('should include temperature', function() {
    presets.temperature.should.have.keys([
      'celsiusToFahrenheit',
      'celsiusToKelvin',
      'celsiusToRankine',
      'celsiusToDelisle',
      'celsiusToNewton',
      'celsiusToReaumur',
      'celsiusToRomer',
    ]);
  });

  it('should include temperature difference', function() {
    presets.temperatureDifference.should.have.keys([
      'celsiusToFahrenheit',
      'celsiusToKelvin',
      'celsiusToRankine',
      'celsiusToDelisle',
      'celsiusToNewton',
      'celsiusToReaumur',
      'celsiusToRomer',
    ]);
  });

  it('should include amount of substance', function() {
    var substance = presets.amountOfSubstance;

    convert(9525.43977, substance.moleToPoundMole).should.be.exactly(21);
    convert(0, substance.moleToPoundMole).should.be.exactly(0);
  });

  it('should include luminous intensity', function() {
    var intensity = presets.luminousIntensity;

    (100).should.be.exactly(convert(101.9367991845056, invert(intensity.candelaToCandlepower)), 'candelaToCandlepower')
      .and.exactly(convert(108.69565217391303, invert(intensity.candelaToHefnerkerze)), 'candelaToHefnerkerze');

    (0).should.be.exactly(convert(0, intensity.candelaToCandlepower), 'candelaToCandlepower')
      .and.exactly(convert(0, intensity.candelaToHefnerkerze), 'candelaToHefnerkerze');
  });

  it('should include velocity', function() {
    var velocity = presets.velocity;

    (100/9.58).should.be.exactly(convert(23.35006567906474, invert(velocity.metresSecondToMilesHour)), 'metresSecondToMilesHour')
      .and.exactly(convert(34.24676299596162, invert(velocity.metresSecondToFeetSecond)), 'metresSecondToFeetSecond')
      .and.exactly(convert(37.578288100208766, invert(velocity.metresSecondToKilometresHour)), 'metresSecondToKilometresHour')
      .and.exactly(convert(20.290652321926984, invert(velocity.metresSecondToKnot)), 'metresSecondToKnot');

    (0).should.be.exactly(convert(0, velocity.metresSecondToMilesHour), 'metresSecondToMilesHour')
      .and.exactly(convert(0, velocity.metresSecondToFeetSecond), 'metresSecondToFeetSecond')
      .and.exactly(convert(0, velocity.metresSecondToKilometresHour), 'metresSecondToKilometresHour')
      .and.exactly(convert(0, velocity.metresSecondToKnot), 'metresSecondToKnot');
  });

  it('should include volume', function() {
    presets.volume.should.have.keys([
      'cubicMetreToMillilitre',
      'cubicMetreToLitre',
      'cubicMetreToCubicInch',
      'cubicMetreToCubicFoot',
      'cubicMetreToImperialFluidOunce',
      'cubicMetreToImperialGill',
      'cubicMetreToImperialPint',
      'cubicMetreToImperialQuart',
      'cubicMetreToImperialGallon',
      'cubicMetreToUSDram',
      'cubicMetreToUSFluidOunce',
      'cubicMetreToUSGill',
      'cubicMetreToUSCup',
      'cubicMetreToUSPint',
      'cubicMetreToUSQuart',
      'cubicMetreToUSGallon'
    ]);
  });

  it('should include area', function() {
    presets.area.should.have.keys([
      'squareMetreToSquareKilometre',
      'squareMetreToHectare',
      'squareMetreToSquareMile',
      'squareMetreToAcre',
      'squareMetreToSquareYard',
      'squareMetreToSquareFoot',
      'squareMetreToSquareInch'
    ]);
  });

  it('should include plane angle', function() {
    var angle = presets.angle;

    (Math.PI / 4).should.be.exactly(convert(1 / 8, invert(angle.radianToTurn)), 'radianToTurn')
      .and.exactly(convert(45, invert(angle.radianToDegree)), 'radianToDegree')
      .and.exactly(convert(50, invert(angle.radianToGradian)), 'radianToGradian');

    (0).should.be.exactly(convert(0, angle.radianToTurn), 'radianToTurn')
      .and.exactly(convert(0, angle.radianToDegree), 'radianToDegree')
      .and.exactly(convert(0, angle.radianToGradian), 'radianToGradian');
  });

  it('should include digital storage', function() {
    var digital = presets.digitalInformation;

    (760217600).should.be.exactly(convert(6081740800, invert(digital.byteToBit)), 'byteToBit')
      .and.exactly(convert(742400, invert(digital.byteToKibibyte)), 'byteToKibibyte')
      .and.exactly(convert(725, invert(digital.byteToMebibyte)), 'byteToMebibyte')
      .and.exactly(convert(0.7080078125, invert(digital.byteToGibibyte)), 'byteToGibibyte')
      .and.exactly(convert(0.0006914138793945312, invert(digital.byteToTebibyte)), 'byteToTebibyte')
      .and.exactly(convert(6.752088665962219e-7, invert(digital.byteToPebibyte)), 'byteToPebibyte')
      .and.exactly(convert(6.59383658785373e-10, invert(digital.byteToExbibyte)), 'byteToExbibyte')
      .and.exactly(convert(6.439293542825908e-13, invert(digital.byteToZebibyte)), 'byteToZebibyte')
      .and.exactly(convert(6.288372600415926e-16, invert(digital.byteToYobibyte)), 'byteToYobibyte');

    (0).should.be.exactly(convert(0, digital.byteToBit), 'byteToBit')
      .and.exactly(convert(0, digital.byteToKibibyte), 'byteToKibibyte')
      .and.exactly(convert(0, digital.byteToMebibyte), 'byteToMebibyte')
      .and.exactly(convert(0, digital.byteToGibibyte), 'byteToGibibyte')
      .and.exactly(convert(0, digital.byteToTebibyte), 'byteToTebibyte')
      .and.exactly(convert(0, digital.byteToPebibyte), 'byteToPebibyte')
      .and.exactly(convert(0, digital.byteToExbibyte), 'byteToExbibyte')
      .and.exactly(convert(0, digital.byteToZebibyte), 'byteToZebibyte')
      .and.exactly(convert(0, digital.byteToYobibyte), 'byteToYobibyte');
  });
});
