import { PlanetCalendar } from "../src/years"


describe("Planet Calendar Class", () => {
  test("should correctly construct a planet calendar object", () => {
    const pluto = new PlanetCalendar("Pluto", 248);
    expect(pluto.planetName).toEqual("Pluto");
    expect(pluto.yearLength).toEqual(248);
    expect(pluto).toEqual({planetName: "Pluto", yearLength: 248});
  })
}) 