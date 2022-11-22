import { useDispatch, useSelector } from "react-redux";
import { showModal } from "state/modals/actions";

function useContainer() {
    const dispatch = useDispatch();
    const { locationList } = useSelector(({locations}) => locations);

    /**
     * Handle show map
     */
    const handleShowMap = (coord_x, coord_y) => {
        dispatch(showModal({
            modalType: 'LOCATION_MAP_MODAL',
            modalProps: {
                position: { lat: +coord_x, lng: +coord_y },
                draggable: false,
                showCurrenPosition: false,
            }
        }))
    };

    return {
        locationList,
        handleShowMap,
    }
}

export default useContainer;