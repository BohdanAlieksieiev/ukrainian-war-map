import React from "react";
import { storiesOf } from "@storybook/react";
import Map from "../components";
import { propsMap } from "./storiesProps/Map";

const stories = storiesOf("Ukraine", module);

stories.add("Ukraine war map", () => {
  return <Map {...propsMap} />;
});
