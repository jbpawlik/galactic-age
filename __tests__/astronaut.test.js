/* eslint-disable no-undef */
import Astronaut from '../src/js/astronaut.js';

describe ('Astronaut', () => {
  let astronautAverage = new Astronaut('developed', 'apple a day', 'no complaints');
  let astronautSenior = new Astronaut();
  let astronautRoughLife = new Astronaut('developing', 'failing', 'despondent');
  let astronautCharmedLife = new Astronaut('advanced', 'fit as a fiddle', 'ecstatic');

  beforeEach(() => {
    astronautAverage.solarAge(70);
    astronautAverage.lifeExpectancy();
    astronautAverage.lifeExpectancyFactors();
    astronautAverage.yearsToDeath(70);
    astronautAverage.yearsPastDue();
    astronautSenior.solarAge(99);
    astronautSenior.lifeExpectancy();
    astronautSenior.yearsToDeath(99);
    astronautSenior.yearsPastDue();
    astronautRoughLife.earthLifeExpectancy = 72;
    astronautRoughLife.lifeExpectancyFactors();
    astronautRoughLife.lifeExpectancy();
    astronautCharmedLife.earthLifeExpectancy = 72;
    astronautCharmedLife.lifeExpectancyFactors();
    astronautCharmedLife.lifeExpectancy();
  });

  test('Should create astronaut object with age property', () => {
    expect(astronautAverage.earthYears).toBeDefined();
  });

  test('Should calculate age in Mercury years', () => {
    expect(astronautAverage.mercuryYears).toEqual(290);
  });

  test('Should calculate age in Venus years', () => {
    expect(astronautAverage.venusYears).toEqual(113);
  });

  test('Should calculate age in Mars years', ()=> {
    expect(astronautAverage.marsYears).toEqual(37);
  });

  test('Should calculate age in Jupiter years', ()=> {
    expect(astronautAverage.jupiterYears).toEqual(5);
  });

  test('Should calculate life expectancy of Earth', ()=> {
    expect(astronautAverage.earthLifeExpectancy).toEqual(72);
  });

  test('Should calculate life expectancy of Mercury', ()=> {
    expect(astronautAverage.mercuryLifeExpectancy).toEqual(298);
  });

  test('Should calculate life expectancy of Venus', ()=> {
    expect(astronautAverage.venusLifeExpectancy).toEqual(116);
  });

  test('Should calculate life expectancy of Mars', ()=> {
    expect(astronautAverage.marsLifeExpectancy).toEqual(38);
  });

  test('Should calculate life expectancy of Jupiter', ()=> {
    expect(astronautAverage.jupiterLifeExpectancy).toEqual(6);
  });

  test('If quality of life is average, should return falsy', ()=> {
    expect(astronautAverage.lifeExpectancyFactors()).toBeFalsy();
  });

  test('If quality of life is lower than average, earth Life expectancy lowers', ()=> {
    expect(parseInt(astronautRoughLife.earthLifeExpectancy)).toEqual(52);
  });

  test('If life expectancy is higher than average, earth Life expectancy raises', ()=> {
    expect(parseInt(astronautCharmedLife.earthLifeExpectancy)).toEqual(95);
  });


  test('Should calculate Earth years remaining based off life expectancy', ()=> {
    expect(astronautAverage.earthYearsLeft).toEqual(2);
  });

  test('Should calculate Mercury years remaining based off life expectancy', ()=> {
    expect(astronautAverage.mercuryYearsLeft).toEqual(8);
  });

  test('Should calculate Venus years remaining based off life expectancy', ()=> {
    expect(astronautAverage.venusYearsLeft).toEqual(3);
  });

  test('Should calculate Mars years remaining based off life expectancy', ()=> {
    expect(astronautAverage.marsYearsLeft).toEqual(1);
  });

  test('Should calculate Jupiter years remaining based off life expectancy', ()=> {
    expect(astronautAverage.jupiterYearsLeft).toEqual(1);
  });

  test('Should change life expectancy based on demographic information', ()=> {
    expect(astronautAverage.earthLifeExpectancy).toEqual(72);
  });

  test('Should return false if [planet]yearsLeft is greater than zero', ()=> {
    expect(astronautAverage.yearsPastDue()).toEqual(false);
  });

  test('Should return true if [planet]yearsLeft is less than zero', ()=> {
    expect(astronautSenior.yearsPastDue()).toEqual(true);
  });

  test('Should return Earth years past life expectancy', ()=> {
    expect(astronautSenior.yearsPastDueEarth).toEqual(27);
  });

  test('Should return Mercury years past life expectancy', ()=> {
    expect(astronautSenior.yearsPastDueMercury).toEqual(112);
  });

  test('Should return Venus years past life expectancy', ()=> {
    expect(astronautSenior.yearsPastDueVenus).toEqual(44);
  });

  test('Should return Mars years past life expectancy', ()=> {
    expect(astronautSenior.yearsPastDueMars).toEqual(14);
  });

  test('Should return Jupiter years past life expectancy', ()=> {
    expect(astronautSenior.yearsPastDueJupiter).toEqual(2);
  });
});
