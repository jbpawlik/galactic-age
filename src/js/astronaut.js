/* eslint-disable no-undef */
export default class Astronaut {
  constructor() {

  }

  solarAge(age) {
    this.earthYears = age;
    this.mercuryYears = parseInt(age * 365.25 / 88);
    this.venusYears = parseInt(age * 365.25 / 225);
    this.marsYears = parseInt(age * 365.25 / 687);
    this.jupiterYears = parseInt(age * 365.25 / 4383);
  }

  lifeExpectancy() {
    this.earthLifeExpectancy = 72;
    this.mercuryLifeExpectancy = parseInt(72 * 365.25 / 88);
    this.venusLifeExpectancy = parseInt(72 * 365.25 / 225);
    this.marsLifeExpectancy = parseInt(72 * 365.25 / 687);
    this.jupiterLifeExpectancy = parseInt(72 * 365.25 / 4383);
  }

  lifeExpectancyFactors() {
    if (this.demographic === 'global average') {
      this.earthLifeExpectancy = 72;
    } else if (this.demographic === 'developed') {
      this.earthLifeExpectancy = 72 * 1.1;
    } else {
      this.demographic = 'developing';
      this.earthLifeExpectancy = 72 * .9;
    }
    if (this.happiness === 'happy') {
      this.earthLifeExpectancy * 1.1;
    } else if (this.happiness === 'poor') {
      this.earthLifeExpectancy * .9;
    } else {
      this.happiness = 'no complaints';
    }
    if (this.health === 'fit as a fiddle') {
      this.earthLifeExpectancy *= 1.1;
    } else if (this.health === 'poor') {
      this.earthLifeExpectancy *= .9;
    } else {
      this.health === 'apple a day';
    }
  }

  yearsToDeath() {
    this.earthYearsLeft = 72 - this.earthYears;
    this.mercuryYearsLeft = parseInt(this.mercuryLifeExpectancy - this.mercuryYears);
    this.venusYearsLeft = parseInt(this.venusLifeExpectancy - this.venusYears);
    this.marsYearsLeft = parseInt(this.marsLifeExpectancy - this.marsYears);
    this.jupiterYearsLeft = parseInt(this.jupiterLifeExpectancy - this.jupiterYears);
  }

}