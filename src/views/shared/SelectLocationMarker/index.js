import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import locationMarker from "assets/svg/locationMarker.svg";
import useContainer from "./hook";

const markerIcon = new L.Icon({
    iconUrl: locationMarker,
    iconRetinaUrl: locationMarker,
    popupAnchor:  [-0, -0],
    iconSize: [27.5, 35],
});

const SelectLocationMarker = () => {
    const { position, markerEventHandler } = useContainer();

    return (
        <Marker
            position={position}
            eventHandlers={markerEventHandler}
            icon={markerIcon}
            draggable={true}
        />
    )
};

export default SelectLocationMarker;