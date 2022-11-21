import { useEffect, useMemo } from "react";
import { useMap } from "react-leaflet/hooks";
import {useDispatch, useSelector} from "react-redux";
import { setPosition } from "state/locations/actions";

function useContainer() {
    const map = useMap();
    const dispatch = useDispatch();
    const { position } = useSelector(({locations}) => locations);

    /**
     * Marker event handler
     */
    const markerEventHandler = useMemo(() => ({
            dragend (event) {
                dispatch(setPosition(event.target.getLatLng()));
            },
        }),
        [],
    );

    /**
     * On map update handler
     */
    const onMapUpdateHandler = () => {
        map.locate().on("locationfound", function (event) {
            dispatch(setPosition(event.latlng))
            map.flyTo(event.latlng, map.getZoom());
        });
        map.invalidateSize();
    };

    /**
     * Lifecycle
     */
    useEffect(onMapUpdateHandler, [map]);

    return {
        position,
        markerEventHandler,
    }
}

export default useContainer;