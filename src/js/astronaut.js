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
    this.mercuryLifeExpectancy = parseInt(this.earthLifeExpectancy * 365.25 / 88);
    this.venusLifeExpectancy = parseInt(this.earthLifeExpectancy * 365.25 / 225);
    this.marsLifeExpectancy = parseInt(this.earthLifeExpectancy * 365.25 / 687);
    this.jupiterLifeExpectancy = parseInt(this.earthLifeExpectancy * 365.25 / 4383);
  }

  lifeExpectancyFactors() {
    if (this.region === 'developing') {
      this.earthLifeExpectancy *= .9;
    } else if (this.region === 'advanced') {
      this.earthLifeExpectancy *= 1.1;
    } else {
      this.region = 'developed';
    }
    if (this.happiness === 'ecstatic') {
      this.earthLifeExpectancy *= 1.1;
    } else if (this.happiness === 'despondent') {
      this.earthLifeExpectancy *= .9;
    } else {
      this.happiness = 'no complaints';
    }
    if (this.health === 'fit as a fiddle') {
      this.earthLifeExpectancy *= 1.1;
    } else if (this.health === 'failing') {
      this.earthLifeExpectancy *= .9;
    } else {
      this.health === 'apple a day';
    }
  }

  yearsToDeath() {
    this.earthYearsLeft = parseInt(this.earthLifeExpectancy - this.earthYears);
    this.mercuryYearsLeft = parseInt(this.mercuryLifeExpectancy - this.mercuryYears);
    this.venusYearsLeft = parseInt(this.venusLifeExpectancy - this.venusYears);
    this.marsYearsLeft = parseInt(this.marsLifeExpectancy - this.marsYears);
    this.jupiterYearsLeft = parseInt(this.jupiterLifeExpectancy - this.jupiterYears);
  }

  longLifeChecker() {
    if (this.earthYearsLeft < 0 || this.mercuryYearsLeft < 0 || this.venusYearsLeft < 0 || this.marsYearsLeft < 0 || this.jupiterYearsLeft < 0) {
      this.yearsPastDueEarth = Math.abs(this.earthYearsLeft);
      this.yearsPastDueMercury = Math.abs(this.mercuryYearsLeft);
      this.yearsPastDueVenus = Math.abs(this.venusYearsLeft);
      this.yearsPastDueMars = Math.abs(this.marsYearsLeft);
      this.yearsPastDueJupiter = Math.abs(this.jupiterYearsLeft);
      return true;
    } else {
      return false;
    }
  }

}