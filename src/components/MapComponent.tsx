import { Box, List, ListItem } from "@material-ui/core";
import { useCallback, useContext, useState } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import styled from "styled-components";

import { TranslationContext } from "../contexts/TranslationContext";
import { RouteInterface } from "../types/usersTypes";

const MapDataContainer = styled(Box)`
  display: flex;
`;

const ProfileMapContainer = styled(MapContainer)`
  width: 100%;
  height: 400px;
`;

export default function MapComponent({ routes }: { routes: RouteInterface[] }) {
  const [currentRoute, setCurrentRoute] = useState(0);
  const { mapComponent } = useContext(TranslationContext).config;

  const routeButtonHandler = useCallback((i) => {
    return () => setCurrentRoute(i);
  }, []);
  return (
    <MapDataContainer>
      <List>
        {routes.map((el, i) => (
          <ListItem
            button
            selected={currentRoute === i}
            onClick={routeButtonHandler(i)}
            key={el.date.getTime()}
          >
            {`${mapComponent.route} ${i + 1}: ${el.date.toLocaleDateString()}`}
          </ListItem>
        ))}
      </List>
      <ProfileMapContainer
        center={routes[currentRoute].polyline[0]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polyline positions={routes[currentRoute].polyline} />
      </ProfileMapContainer>
    </MapDataContainer>
  );
}
