import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Wrapper } from "@googlemaps/react-wrapper";

import MapG from "./MapG";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <Wrapper>
    <MapG />
  </Wrapper>
);

export default Newsletter;
