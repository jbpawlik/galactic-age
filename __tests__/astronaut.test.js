/* eslint-disable no-undef */
import Astronaut from '../src/js/astronaut.js';

describe ('Astronaut', () => {
  let astronaut = new Astronaut();
  astronaut.solarAge(70);
  astronaut.lifeExpectancy();
  astronaut.yearsToDeath(70);

  beforeEach(() => {
  });

  test('Should create astronaut object with age property', () => {
    expect(astronaut.earthYears).toBeDefined();
  });

  test('Should calculate age in Mercury years', () => {
    expect(astronaut.mercuryYears).toEqual(290);
  });

  test('Should calculate age in Venus years', () => {
    expect(astronaut.venusYears).toEqual(113);
  });

  test('Should calculate age in Mars years', ()=> {
    expect(astronaut.marsYears).toEqual(37);
  });

  test('Should calculate age in Jupiter years', ()=> {
    expect(astronaut.jupiterYears).toEqual(5);
  });

  test('Should calculate life expectancy of Earth', ()=> {
    expect(astronaut.earthLifeExpectancy).toEqual(72);
  });

  test('Should calculate life expectancy of Mercury', ()=> {
    expect(astronaut.mercuryLifeExpectancy).toEqual(298);
  });

  test('Should calculate life expectancy of Venus', ()=> {
    expect(astronaut.venusLifeExpectancy).toEqual(116);
  });

  test('Should calculate life expectancy of Mars', ()=> {
    expect(astronaut.venusLifeExpectancy).toEqual(38);
  });

  test('Should calculate Earth years remaining based off life expectancy', ()=> {
    expect(astronaut.earthYearsLeft).toEqual(2);
  });

  test('Should calculate Mercury years remaining based off life expectancy', ()=> {
  });
});
