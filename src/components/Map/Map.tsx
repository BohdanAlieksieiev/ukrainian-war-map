import React from "react";
import { MapPropsTypes } from "./types";

export const Map: React.FC<MapPropsTypes> = ({ width = 640, height = 480 }) => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1ROxxPyw0nPAa5HDAABCBU-IDECabGw3-&ehbc=2E312F"
        width={width}
        height={height}
      ></iframe>
    </>
  );
};

// export default Map;
