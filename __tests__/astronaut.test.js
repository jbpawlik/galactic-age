/* eslint-disable no-undef */
import Astronaut from '../src/js/astronaut.js';

describe ('Astronaut', () => {

  beforeEach(() => {
  });

  test('Should create astronaut object with age property', () => {
    let astronaut = new Astronaut(70);
    expect(astronaut.age).toBeDefined();
  });

  test('Should calculate age in Mercury years', () => {
    let astronaut = new Astronaut(70);
    astronaut.mercuryAge(70);
    expect(astronaut.mercuryYears).toEqual(290);
  });

});
