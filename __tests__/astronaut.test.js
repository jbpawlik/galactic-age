/* eslint-disable no-undef */
import Astronaut from '../src/js/astronaut.js';

describe ('Astronaut', () => {

  test('Should create astronaut object with age', () => {
    let astronaut = new Astronaut(70);
    expect(astronaut.age).toBeDefined();
  });

});
