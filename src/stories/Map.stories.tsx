import React from "react";
import { storiesOf } from "@storybook/react";
import Map, { Unchain } from "../components";
import { propsMap, propsUnchain } from "./storiesProps/Map";

const stories = storiesOf("Ukraine", module);

stories.add("Ukraine war map", () => {
  return <Map {...propsMap} />;
});

stories.add("Unchain", () => {
  return <Unchain {...propsUnchain} />;
});
