import { useEffect, useMemo } from "react";
import { useMap } from "react-leaflet/hooks";

function useContainer({ onChangeLocation, showCurrenPosition }) {
    const map = useMap();

    /**
     * Marker event handler
     */
    const markerEventHandler = useMemo(() => ({
            dragend (event) {
                onChangeLocation(event.target.getLatLng());
            },
        }),
        [],
    );

    /**
     * On map update handler
     */
    const onMapUpdateHandler = () => {
        map.invalidateSize();

        if (!showCurrenPosition) return;

        map.locate().on("locationfound", function (event) {
            onChangeLocation(event.latlng);
            map.flyTo(event.latlng, map.getZoom());
        });
    };

    /**
     * Lifecycle
     */
    useEffect(onMapUpdateHandler, [map]);

    return {
        markerEventHandler,
    }
}

export default useContainer;