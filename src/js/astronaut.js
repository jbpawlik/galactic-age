export default class Astronaut {
  constructor(age) {
    this.age = age;
  }

  mercuryAge(age) {
    this.mercuryYears = parseInt(age * 365.25 / 88);
  }

  venusAge(age) {
    this.venusYears = parseInt(age * 365.25 / 225);
  }

  marsAge(age) {
    this.marsYears = parseInt(age * 365.25 / 687);
  }

  jupiterAge(age) {
    this.jupiterYears = parseInt(age * 365.25 / 4383);
  }
}
