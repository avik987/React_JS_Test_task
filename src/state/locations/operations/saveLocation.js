import { createLogic } from "redux-logic";

import { SAVE_LOCATION_REQUEST } from "state/locations/types";
import { saveLocationRoute } from "lib/apiRoutes";
import { showModal } from "state/modals/actions";

const saveLocation = createLogic({
    type: SAVE_LOCATION_REQUEST,
    latest: true,

    async process({ httpClient, getState, action }, dispatch, done) {
        const { locations: { userIpAddress } } = getState();

        const body = {
            ip: userIpAddress,
            coord_x: action.location.lat,
            coord_y: action.location.lng,
        };

        try {
            await httpClient.post(saveLocationRoute, body);

        }catch(error) {
            dispatch(showModal({
                modalType: 'SHOW_ERROR_MODAL',
                modalProps: {
                    errorMessage: error?.response?.data?.errors?.messages,
                }
            }));
        }
        done();
    },
});

export default saveLocation;