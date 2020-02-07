import { SolarSystemCalendar, PlanetCalendar } from "../src/years"


describe("Planet Calendar Class", () => {
  test("should correctly construct a planet calendar object", () => {
    const pluto = new PlanetCalendar("Pluto", 248);
    expect(pluto.planetName).toEqual("Pluto");
    expect(pluto.yearLength).toEqual(248);
    expect(pluto).toEqual({planetName: "Pluto", yearLength: 248});
  })
  test("should accept a length of time in earth years and correctly return it in x planet years", () => {
    const pluto = new PlanetCalendar("Pluto", 248);
    const earth = new PlanetCalendar("Earth", 1);
    expect(pluto.getAgeOnPlanet(248)).toEqual(1);
    expect(earth.getAgeOnPlanet(25.3)).toEqual(25.3);
  })
}) 

describe("Solar System Calendar Class", () => {
  test("should construct an object that contains an array of planet calendar objects for all planets in our solar system", () => {
    const calendar = new SolarSystemCalendar();
    expect(calendar.planetCalendars.length).toEqual(8);
    expect(calendar.planetCalendars[0]).toEqual({planetName: "Mercury", yearLength: .241});
    expect(calendar.planetCalendars[0].planetName).toEqual("Mercury");
    expect(calendar.planetCalendars[5].getAgeOnPlanet(25.3)).toEqual(25.3/29.456);
  })
})