import { useSelector } from "react-redux";

function useContainer() {
    const { locationList } = useSelector(({locations}) => locations);

    return {
        locationList,
    }
}

export default useContainer;