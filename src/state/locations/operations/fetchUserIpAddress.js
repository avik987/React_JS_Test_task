import { createLogic } from "redux-logic";
import axios from "axios";

import { FETCH_USER_IP_ADDRESS_REQUEST } from "state/locations/types";
import { setUserIpAddress } from "state/locations/actions";
import { fetchIpAddressRoute } from "lib/apiRoutes";

const fetchUserIpAddress = createLogic({
    type: FETCH_USER_IP_ADDRESS_REQUEST,
    latest: true,

    async process(_, dispatch, done) {
        try {
            const { data: { IPv4 } } = await axios.get(fetchIpAddressRoute);
            dispatch(setUserIpAddress(IPv4));
        }catch {
            dispatch(setUserIpAddress('0.0.0.0'));
        }
        done();
    },
});

export default fetchUserIpAddress;