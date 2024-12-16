import React, { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
  Libraries,
} from "@react-google-maps/api";

const styles = {
  mainContainer: {
    display: "flex" as const,
    width: "100%",
    height: "40rem",
    backgroundColor: "#FBFBFB",
  },
  mapContainer: {
    width: "25%",
    height: "30rem",
  },
  searchContainer: {
    width: "30%",
    padding: "2rem",
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "#FBFBFB",
  },
  input: {
    marginTop: "0.5rem",
    width: "35%",
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  h1: {
    fontSize: "1.4rem",
    color: "black",
  },
};

const libraries: Libraries = ["places"];

const center = {
  lat: 44.8378,
  lng: -0.5792,
};

const Map: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [position, setPosition] = useState<{ lat: number; lng: number }>(
    center,
  );
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  }, []);

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry && place.geometry.location) {
        const location = place.geometry.location;
        const newCenter = {
          lat: location.lat(),
          lng: location.lng(),
        };

        setPosition(newCenter);
        if (map) map.panTo(newCenter);
      }
    }
  };

  return (
    <LoadScript googleMapsApiKey="*****" libraries={libraries}>
      <div style={styles.mainContainer}>
        <GoogleMap
          mapContainerStyle={styles.mapContainer}
          center={position}
          zoom={10}
          onLoad={onLoad}
        >
          <Marker position={position} />
        </GoogleMap>
        <div style={styles.searchContainer}>
          <h1 style={styles.h1}>Search for a City</h1>
          <Autocomplete
            onLoad={(ref) => (autocompleteRef.current = ref)}
            onPlaceChanged={onPlaceChanged}
          >
            <input
              type="text"
              placeholder="Enter a city"
              style={styles.input}
            />
          </Autocomplete>
        </div>
      </div>
    </LoadScript>
  );
};

export default Map;
