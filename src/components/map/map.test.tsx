import { render } from "@testing-library/react";
import mapboxgl from "mapbox-gl";

import { Map } from "./map";

jest.mock("mapbox-gl", () => {
  return {
    default: {
      Map: jest.fn(() => {
        return {
          on: jest.fn(),
        };
      }),
    },
  };
});

describe("Map", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });

  test("renders a map", () => {
    const elem = render(<Map />);
    const mapSpy = jest.spyOn(mapboxgl, "Map");
    expect(mapSpy).toHaveBeenCalledTimes(1);
    expect(mapSpy).toHaveBeenCalledWith({
      container: expect.any(HTMLDivElement) as HTMLDivElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-70.9, 42.35],
      zoom: 9,
    });
    expect(elem.getByTestId("map")).toBeDefined();
  });
});
