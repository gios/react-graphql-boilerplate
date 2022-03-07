import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import classes from "./map.module.scss";

export function Map() {
  // mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>();
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLDivElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      if (!map.current) return;
      setLng(+map.current.getCenter().lng.toFixed(4));
      setLat(+map.current.getCenter().lat.toFixed(4));
      setZoom(+map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div
        data-testid="map"
        ref={mapContainer}
        className={classes.mapContainer}
      ></div>
    </div>
  );
}
