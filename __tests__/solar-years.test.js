import { PlanetCalendar } from "../src/years"


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