import { SolarSystemCalendar, PlanetCalendar } from "../src/years"


describe("Planet Calendar Class", () => {
  let pluto;

  beforeEach(() => {
    pluto = new PlanetCalendar("Pluto", 248);
  })

  test("should correctly construct a planet calendar object", () => {
    expect(pluto.planetName).toEqual("Pluto");
    expect(pluto.yearLength).toEqual(248);
    expect(pluto).toEqual({planetName: "Pluto", yearLength: 248});
  })
  test("should accept a length of time in earth years and correctly return it in x planet years", () => {
    expect(pluto.convertToPlanetYears(248)).toEqual(1);
  })
  test("should return the user's remaining life expectancy on a given planet", () => {
    expect(pluto.getLifeExpectancyLeft(25)).toEqual("0.19 more years expected");
  })
  test("should return the user's remaining life expectancy on earth", () => {
    const earth = new PlanetCalendar("Earth", 1)
    expect(earth.getLifeExpectancyLeft(25)).toEqual("47.60 more years expected");
  })
}) 

describe("Solar System Calendar Class", () => {
  const calendar = new SolarSystemCalendar();

  test("should construct an object that contains an array of planet calendar objects for all planets in our solar system", () => {
    expect(calendar.planetCalendars.length).toEqual(8);
    expect(calendar.planetCalendars[0]).toEqual({planetName: "Mercury", yearLength: .241});
    expect(calendar.planetCalendars[0].planetName).toEqual("Mercury");
    expect(calendar.planetCalendars[5].convertToPlanetYears(25.3)).toEqual(25.3/29.456);
  })
  test("should take an age (in earth years) and return a string listing this timeframe on each planet in the solar system", () => {
    expect(calendar.getAgeList(50)).toEqual("Mercury: 207.47, Venus: 81.27, Earth: 50.00, Mars: 26.58, Jupiter: 4.22, Saturn: 1.70, Uranus: 0.60, Neptune: 0.30")
  })
  test("should tell a user their life expectancy on each planet in the solar system", () => {
    expect(calendar.getLifeExpectancyList(10)).toEqual("");
  })
})