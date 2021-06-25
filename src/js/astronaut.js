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

  yearsToDeath() {
    this.earthYearsLeft = 72 - this.earthYears;
    this.mercuryYearsLeft = parseInt(this.mercuryLifeExpectancy - this.mercuryYears);
    this.venusYearsLeft = parseInt(this.venusLifeExpectancy - this.venusYears);
    this.marsYearsLeft = parseInt(this.marsLifeExpectancy - this.marsYears);
  }




}