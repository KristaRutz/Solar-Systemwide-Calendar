const mercuryYear = .241;
const venusYear = .6152
const earthYear = 1;
const marsYear = 1.8809;
const jupiterYear = 11.8618;
const saturnYear = 29.456;
const uranusYear = 84.02;
const neptuneYear = 164.8;

const earthDaysInYear = 365.2564;

export class SolarSystemAge {
  constructor(earthyearAge){
    this.earthyearAge = earthyearAge;
    this.marsyearAge = earthyearAge * 1.88;
  }

  planetAge(planet){
    return `${planet}`Year * this.earthyearAge;
  }
}