import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { saveLocation } from "state/locations/actions";
import { showModal } from "state/modals/actions";

function useContainer({ onClose, position }) {
    const dispatch = useDispatch();
    const [location, setLocation] = useState(position);

    /**
     * Handle save
     */
    const handleSave = useCallback(() => {
        onClose();
        dispatch(saveLocation(location));
    }, [location]);

    /**
     * Handle back
     */
    const handleBack = useCallback(() => {
        dispatch(showModal({
            modalType: 'LIST_OF_LOCATIONS_MODAL'
        }))
    }, []);

    /**
     * On change location
     */
    const onChangeLocation = useCallback((value) => {
        setLocation(value);
    }, [location]);

    return {
        handleSave,
        handleBack,
        location,
        onChangeLocation,
    }
}

export default useContainer;