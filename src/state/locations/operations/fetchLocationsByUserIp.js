import { createLogic } from "redux-logic";

import { FETCH_LOCATIONS_BY_USER_IP_REQUEST } from "state/locations/types";
import { fetchLocationsListByIpRoute } from "lib/apiRoutes";
import { setLocationsByUserIp, setLocationsRequestLoader } from "state/locations/actions";
import { showModal } from "state/modals/actions";

const fetchLocationsByUserIp = createLogic({
    type: FETCH_LOCATIONS_BY_USER_IP_REQUEST,
    latest: true,

    async process({ httpClient, getState }, dispatch, done) {
        const { locations: { userIpAddress } } = getState();

        const body = {
            ip: userIpAddress,
        };

        try {
            const { data: { data } } = await httpClient.post(fetchLocationsListByIpRoute, body);
            dispatch(setLocationsByUserIp(data));

            dispatch(showModal({
                modalType: 'LIST_OF_LOCATIONS_MODAL',
            }));

        }catch(error) {
            dispatch(showModal({
                modalType: 'SHOW_ERROR_MODAL',
                modalProps: {
                    errorMessage: error?.response?.data?.errors?.messages,
                }
            }));
            dispatch(setLocationsRequestLoader(false));
        }
        done();
    },
});

export default fetchLocationsByUserIp;