// length of each planet's year in Earth Years
const mercuryYear = .241;
const venusYear = .6152;
const earthYear = 1;
const marsYear = 1.8809;
const jupiterYear = 11.8618;
const saturnYear = 29.456;
const uranusYear = 84.0205;
const neptuneYear = 164.8;

//const earthDaysInYear = 365.2564;
const lifeExpectancy = 72.6;

export class PlanetCalendar {
  constructor(planetName, yearLength) {
    this.planetName = planetName;
    this.yearLength = yearLength;
  }

  convertToPlanetYears(earthYearAge) {
    return earthYearAge / this.yearLength;
  }

  static get lifeExpectancy() {
    return 72.6;
  }

  getLifeExpectancyLeft(earthYearAge) {
    let earthYearsRemaining = lifeExpectancy - earthYearAge;
    if (earthYearsRemaining >= 0){
      return this.convertToPlanetYears(earthYearsRemaining).toFixed(2) + " more years expected";
    } else return Math.abs(this.convertToPlanetYears(earthYearsRemaining).toFixed(2)) + " years past life expectancy";

  }
}

export class SolarSystemCalendar {
  constructor(){
    this.mercuryCal = new PlanetCalendar("Mercury", mercuryYear);
    this.venusCal = new PlanetCalendar("Venus", venusYear);
    this.earthCal = new PlanetCalendar("Earth", earthYear);
    this.marsCal = new PlanetCalendar("Mars", marsYear);
    this.jupiterCal = new PlanetCalendar("Jupiter", jupiterYear);
    this.saturnCal = new PlanetCalendar("Saturn", saturnYear);
    this.uranusCal = new PlanetCalendar("Uranus", uranusYear);
    this.neptuneCal = new PlanetCalendar("Neptune", neptuneYear);

    this.planetCalendars = [this.mercuryCal, this.venusCal, this.earthCal, this.marsCal, this.jupiterCal, this.saturnCal, this.uranusCal, this.neptuneCal];
  }

  getAgeList(earthYearAge){
    let ageList = ``;
    for (let i = 0; i < 8; i ++){
      let currentPlanet = this.planetCalendars[i];
      if (i<7){
        ageList += `${currentPlanet.planetName}: ${currentPlanet.convertToPlanetYears(earthYearAge).toFixed(2)}, `;
      } else {
        ageList += `${currentPlanet.planetName}: ${currentPlanet.convertToPlanetYears(earthYearAge).toFixed(2)}`;
      }
    }
    return ageList;
  }

  getLifeExpectancyList(earthYearAge){
    let expectedList = ``;
    for (let i = 0; i < 8; i ++){
      let currentPlanet = this.planetCalendars[i];
        expectedList += `On ${currentPlanet.planetName}, ${currentPlanet.getLifeExpectancyLeft(earthYearAge)}. `;
    }
    return expectedList;
  }
}