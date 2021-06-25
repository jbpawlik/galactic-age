/* eslint-disable no-undef */
import Astronaut from '../src/js/astronaut.js';

describe ('Astronaut', () => {
  let astronaut = new Astronaut(70);

  beforeEach(() => {
  });

  test('Should create astronaut object with age property', () => {
    expect(astronaut.age).toBeDefined();
  });

  test('Should calculate age in Mercury years', () => {
    astronaut.mercuryAge(70);
    expect(astronaut.mercuryYears).toEqual(290);
  });

  test('Should calculate age in Venus years', () => {
    astronaut.venusAge(70);
    expect(astronaut.venusYears).toBeDefined();

  });

});
