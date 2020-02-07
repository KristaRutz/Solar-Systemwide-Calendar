// length of each planet's year in Earth Years
const mercuryYear = .241;
const venusYear = .6152
const earthYear = 1;
const marsYear = 1.8809;
const jupiterYear = 11.8618;
const saturnYear = 29.456;
const uranusYear = 84.0205;
const neptuneYear = 164.8;

const planetNames = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
const yearLengths = [mercuryYear, venusYear, earthYear, marsYear, jupiterYear, saturnYear, uranusYear, neptuneYear];

const earthDaysInYear = 365.2564;

export class PlanetCalendar {
  constructor(planetName, yearLength) {
    this.planetName = planetName;
    this.yearLength = yearLength;
  }

  getAgeOnPlanet(earthYearAge) {
    return earthYearAge / this.yearLength;
  }
}

const mercuryCal = new PlanetCalendar("Mercury", mercuryYear)
const venusCal = new PlanetCalendar("Venus", 0.6152)
const earthCal = new PlanetCalendar("Earth", 1)
const marsCal = new PlanetCalendar("Mars", marsYear);
const jupiterCal = new PlanetCalendar("Jupiter", 11.8618)
const saturnCal = new PlanetCalendar("Saturn", 29.456)
const uranusCal = new PlanetCalendar("Uranus", 84.0205)
const neptuneCal = new PlanetCalendar("Neptune", 164.8);

export class SolarSystemCalendar {
  constructor(){
    this.planetCalendars = [mercuryCal, venusCal, earthCal, marsCal, jupiterCal, saturnCal, uranusCal, neptuneCal];
  }

  getAgeList(earthYearAge){
    let ageList = ``;
    for (let i = 0; i < 8; i ++){
      let currentPlanet = this.planetCalendars[i];
      if (i<7){
        ageList += `${currentPlanet.planetName}: ${currentPlanet.getAgeOnPlanet(earthYearAge).toFixed(2)}, `
      } else {
        ageList += `${currentPlanet.planetName}: ${currentPlanet.getAgeOnPlanet(earthYearAge).toFixed(2)}`
      }
    }
    return ageList;
  }
}