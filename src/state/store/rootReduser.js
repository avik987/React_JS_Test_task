import {combineReducers} from "redux";

import modals from "state/modals/reducer";
import locations from "state/locations/reducer";

const rootReducer = combineReducers({
    modals,
    locations,
});

export default rootReducer;