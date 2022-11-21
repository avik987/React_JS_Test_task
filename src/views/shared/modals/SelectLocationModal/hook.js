import { useDispatch } from "react-redux";
import { saveLocation } from "state/locations/actions";

function useContainer({ onClose }) {
    const dispatch = useDispatch();

    const handleSave = () => {
        onClose();
        dispatch(saveLocation());
    };

    return {
        handleSave,
    }
}

export default useContainer;