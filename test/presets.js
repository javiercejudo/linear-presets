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
    var mass = presets.mass;

    (10).should.be.exactly(convert(0.01, invert(mass.kilogramToMetricTon)), 'kilogramToMetricTon')
      .and.exactly(convert(10000, invert(mass.kilogramToGram)), 'kilogramToGram')
      .and.exactly(convert(1e+7, invert(mass.kilogramToMilligram)), 'kilogramToMilligram')
      .and.exactly(convert(1e+10, invert(mass.kilogramToMicrogram)), 'kilogramToMicrogram')
      .and.exactly(convert(0.00984251968503937, invert(mass.kilogramToLongTon)), 'kilogramToLongTon')
      .and.exactly(convert(0.011023113109243879, invert(mass.kilogramToShortTon)), 'kilogramToShortTon')
      .and.exactly(convert(1.5747304441776968, invert(mass.kilogramToStone)), 'kilogramToStone')
      .and.exactly(convert(22.046226218487757, invert(mass.kilogramToPound)), 'kilogramToPound')
      .and.exactly(convert(352.7396195580167, invert(mass.kilogramToOunce)), 'kilogramToOunce');

    (0).should.be.exactly(convert(0, mass.kilogramToMetricTon), 'kilogramToMetricTon')
      .and.exactly(convert(0, mass.kilogramToGram), 'kilogramToGram')
      .and.exactly(convert(0, mass.kilogramToMilligram), 'kilogramToMilligram')
      .and.exactly(convert(0, mass.kilogramToMicrogram), 'kilogramToMicrogram')
      .and.exactly(convert(0, mass.kilogramToLongTon), 'kilogramToLongTon')
      .and.exactly(convert(0, mass.kilogramToShortTon), 'kilogramToShortTon')
      .and.exactly(convert(0, mass.kilogramToStone), 'kilogramToStone')
      .and.exactly(convert(0, mass.kilogramToPound), 'kilogramToPound')
      .and.exactly(convert(0, mass.kilogramToOunce), 'kilogramToOunce');
  });

  it('should include time', function() {
    var time = presets.time;

    (259200).should.be.exactly(convert(259200000000000, invert(time.secondToNanosecond)), 'secondToNanosecond')
      .and.exactly(convert(259200000000, invert(time.secondToMicrosecond)), 'secondToMicrosecond')
      .and.exactly(convert(259200000000, invert(time.secondToMicrosecond)), 'secondToMicrosecond')
      .and.exactly(convert(259200000, invert(time.secondToMillisecond)), 'secondToMillisecond')
      .and.exactly(convert(4320, invert(time.secondToMinute)), 'secondToMinute')
      .and.exactly(convert(72, invert(time.secondToHour)), 'secondToHour')
      .and.exactly(convert(3, invert(time.secondToDay)), 'secondToDay')
      .and.exactly(convert(0.42857142857142856, invert(time.secondToWeek)), 'secondToWeek')
      .and.approximately(convert(0.09856465225158627, invert(time.secondToMonth)), 10e-11, 'secondToMonth')
      .and.exactly(convert(0.008213721020965523, invert(time.secondToYear)), 'secondToYear')
      .and.exactly(convert(0.0008213721020965523, invert(time.secondToDecade)), 'secondToDecade')
      .and.exactly(convert(0.00008213721020965523, invert(time.secondToCentury)), 'secondToCentury')
      .and.approximately(convert(0.000008213721020965522, invert(time.secondToMillennium)), 10e-11, 'secondToMillennium');

    (0).should.be.exactly(convert(0, time.secondToNanosecond), 'secondToNanosecond')
      .and.exactly(convert(0, time.secondToMicrosecond), 'secondToMicrosecond')
      .and.exactly(convert(0, time.secondToMicrosecond), 'secondToMicrosecond')
      .and.exactly(convert(0, time.secondToMillisecond), 'secondToMillisecond')
      .and.exactly(convert(0, time.secondToMinute), 'secondToMinute')
      .and.exactly(convert(0, time.secondToHour), 'secondToHour')
      .and.exactly(convert(0, time.secondToDay), 'secondToDay')
      .and.exactly(convert(0, time.secondToWeek), 'secondToWeek')
      .and.exactly(convert(0, time.secondToMonth), 'secondToMonth')
      .and.exactly(convert(0, time.secondToYear), 'secondToYear')
      .and.exactly(convert(0, time.secondToDecade), 'secondToDecade')
      .and.exactly(convert(0, time.secondToCentury), 'secondToCentury')
      .and.exactly(convert(0, time.secondToMillennium), 'secondToMillennium');
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
    var volume = presets.volume;

    (Math.PI * 4 / 3).should.be.exactly(convert(1e+6 * Math.PI * 4 / 3, invert(volume.cubicMetreToMillilitre)), 'cubicMetreToMillilitre')
      .and.exactly(convert(1000 * Math.PI * 4 / 3, invert(volume.cubicMetreToLitre)), 'cubicMetreToLitre')
      .and.exactly(convert(255615.66152340596, invert(volume.cubicMetreToCubicInch)), 'cubicMetreToCubicInch')
      .and.exactly(convert(147.9257300482673, invert(volume.cubicMetreToCubicFoot)), 'cubicMetreToCubicFoot')
      .and.exactly(convert(147424.80522071107, invert(volume.cubicMetreToImperialFluidOunce)), 'cubicubicMetreToCubicFootcMetreToImperialFluidOunce')
      .and.exactly(convert(29484.96104414222, invert(volume.cubicMetreToImperialGill)), 'cubicMetreToImperialGill')
      .and.exactly(convert(7371.240261035554, invert(volume.cubicMetreToImperialPint)), 'cubicMetreToImperialPint')
      .and.exactly(convert(3685.6201305177774, invert(volume.cubicMetreToImperialQuart)), 'cubicMetreToImperialQuart')
      .and.exactly(convert(921.4050326294443, invert(volume.cubicMetreToImperialGallon)), 'cubicMetreToImperialGallon')
      .and.exactly(convert(1133118.7766232367, invert(volume.cubicMetreToUSDram)), 'cubicMetreToUSDram')
      .and.exactly(convert(141639.8470779046, invert(volume.cubicMetreToUSFluidOunce)), 'cubicMetreToUSFluidOunce')
      .and.exactly(convert(35409.96176947615, invert(volume.cubicMetreToUSGill)), 'cubicMetreToUSGill')
      .and.exactly(convert(17704.980884738074, invert(volume.cubicMetreToUSCup)), 'cubicMetreToUSCup')
      .and.exactly(convert(8852.490442369037, invert(volume.cubicMetreToUSPint)), 'cubicMetreToUSPint')
      .and.exactly(convert(4426.245221184518, invert(volume.cubicMetreToUSQuart)), 'cubicMetreToUSQuart')
      .and.exactly(convert(1106.5613052961296, invert(volume.cubicMetreToUSGallon)), 'cubicMetreToUSGallon');

    (0).should.be.exactly(convert(0, volume.cubicMetreToMillilitre), 'cubicMetreToMillilitre')
      .and.exactly(convert(0, volume.cubicMetreToLitre), 'cubicMetreToLitre')
      .and.exactly(convert(0, volume.cubicMetreToCubicInch), 'cubicMetreToCubicInch')
      .and.exactly(convert(0, volume.cubicMetreToCubicFoot), 'cubicMetreToCubicFoot')
      .and.exactly(convert(0, volume.cubicMetreToImperialFluidOunce), 'cubicMetreToImperialFluidOunce')
      .and.exactly(convert(0, volume.cubicMetreToImperialGill), 'cubicMetreToImperialGill')
      .and.exactly(convert(0, volume.cubicMetreToImperialPint), 'cubicMetreToImperialPint')
      .and.exactly(convert(0, volume.cubicMetreToImperialQuart), 'cubicMetreToImperialQuart')
      .and.exactly(convert(0, volume.cubicMetreToImperialGallon), 'cubicMetreToImperialGallon')
      .and.exactly(convert(0, volume.cubicMetreToUSDram), 'cubicMetreToUSDram')
      .and.exactly(convert(0, volume.cubicMetreToUSFluidOunce), 'cubicMetreToUSFluidOunce')
      .and.exactly(convert(0, volume.cubicMetreToUSGill), 'cubicMetreToUSGill')
      .and.exactly(convert(0, volume.cubicMetreToUSCup), 'cubicMetreToUSCup')
      .and.exactly(convert(0, volume.cubicMetreToUSPint), 'cubicMetreToUSPint')
      .and.exactly(convert(0, volume.cubicMetreToUSQuart), 'cubicMetreToUSQuart')
      .and.exactly(convert(0, volume.cubicMetreToUSGallon), 'cubicMetreToUSGallon');
  });

  it('should include area', function() {
    var area = presets.area;

    (5.045e+9).should.be.exactly(convert(5045, invert(area.squareMetreToSquareKilometre)), 'squareMetreToSquareKilometre')
      .and.exactly(convert(504500, invert(area.squareMetreToHectare)), 'squareMetreToHectare')
      .and.exactly(convert(1947.8853898466393, invert(area.squareMetreToSquareMile)), 'squareMetreTosquareMile')
      .and.exactly(convert(1246646.6495018492, invert(area.squareMetreToAcre)), 'squareMetreToAcre')
      .and.exactly(convert(6033769783.58895, invert(area.squareMetreToSquareYard)), 'squareMetreToSquareYard')
      .and.exactly(convert(54303928052.300545, invert(area.squareMetreToSquareFoot)), 'squareMetreToSquareFoot')
      .and.exactly(convert(7819765639531.279, invert(area.squareMetreToSquareInch)), 'squareMetreToSquareInch');

    (0).should.be.exactly(convert(0, area.squareMetreToSquareKilometre), 'squareMetreToSquareKilometre')
      .and.exactly(convert(0, area.squareMetreToHectare), 'squareMetreToHectare')
      .and.exactly(convert(0, area.squareMetreToSquareMile), 'squareMetreTosquareMile')
      .and.exactly(convert(0, area.squareMetreToAcre), 'squareMetreToAcre')
      .and.exactly(convert(0, area.squareMetreToSquareYard), 'squareMetreToSquareYard')
      .and.exactly(convert(0, area.squareMetreToSquareFoot), 'squareMetreToSquareFoot')
      .and.exactly(convert(0, area.squareMetreToSquareInch), 'squareMetreToSquareInch');
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
