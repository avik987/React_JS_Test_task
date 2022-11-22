import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showModal } from "state/modals/actions";
import { fetchLocationsByUserIp, fetchUserIpAddress } from "state/locations/actions";

function useContainer() {
    const dispatch = useDispatch();
    const { loader } = useSelector(({locations}) => locations);

    /**
     * Show SelectLocationModal
     */
    const showLocationModal = useCallback(() => {
        dispatch(showModal({
            modalType: 'LOCATION_MAP_MODAL',
            modalProps: {
                draggable: true,
            }
        }));
    }, []);

    /**
     * Show list location
     */
    const showListLocationModal = useCallback(() => {
        dispatch(fetchLocationsByUserIp());
    }, []);


    /**
     * On component mount handler
     */
    const onMountHandler = () => {
        dispatch(fetchUserIpAddress());
    };

    /**
     * Lifecycle
     */
    useEffect(onMountHandler, []);

    return {
        showLocationModal,
        showListLocationModal,
        loader,
    }
}

export default useContainer;