import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import PropTypes from "prop-types";

import locationMarker from "assets/svg/locationMarker.svg";
import useContainer from "./hook";

const markerIcon = new L.Icon({
    iconUrl: locationMarker,
    iconRetinaUrl: locationMarker,
    popupAnchor:  [-0, -0],
    iconSize: [27.5, 35],
});

const LocationMarker = ({ position, draggable, showCurrenPosition, onChangeLocation }) => {
    const { markerEventHandler } = useContainer({ showCurrenPosition, onChangeLocation });

    return (
        <Marker
            position={position}
            eventHandlers={markerEventHandler}
            icon={markerIcon}
            draggable={draggable}
        />
    )
};

LocationMarker.defaultProps = {
    showCurrenPosition: true,
};

LocationMarker.propTypes = {
    position: PropTypes.object.isRequired,
    showCurrenPosition: PropTypes.bool,
    draggable: PropTypes.bool.isRequired,
    onChangeLocation: PropTypes.func.isRequired,
};

export default LocationMarker;