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
}
//   mercuryAge(age) {
//     this.mercuryYears = parseInt(age * 365.25 / 88);
//   }

//   venusAge(age) {
//     this.venusYears = parseInt(age * 365.25 / 225);
//   }

//   marsAge(age) {
//     this.marsYears = parseInt(age * 365.25 / 687);
//   }

//   jupiterAge(age) {
//     this.jupiterYears = parseInt(age * 365.25 / 4383);
//   }
// }