import React, { useState } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const Map = () => {
  const [selected, setSelected] = useState(null);
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: -42.84724, lng: 147.29592 }}
    >
      <Marker
        position={{
          lat: -42.84724,
          lng: 147.29592,
        }}
        onClick={() => {
          setSelected(1);
        }}
      />

      {selected === 1 && (
        <InfoWindow
          onCloseClick={() => {
            setSelected(null);
          }}
          position={{
            lat: -42.84724,
            lng: 147.29592,
          }}
        >
          <div>
            <h2>Souta</h2>
            <p>Shop2-3/73-75 Main Road Moonah</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MapG = () => {
  return (
    <div style={{ width: "100vw", height: "60vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default MapG;
