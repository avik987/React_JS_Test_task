import * as types from "state/locations/types";

export const fetchUserIpAddress = () => ({
    type: types.FETCH_USER_IP_ADDRESS_REQUEST,
});

export const setUserIpAddress = (ipAddress) => ({
    type: types.FETCH_USER_IP_ADDRESS_SUCCESS,
    ipAddress,
});

export const setPosition = (position) => ({
    type: types.SET_POSITION,
    position,
});

export const fetchLocationsByUserIp = () => ({
    type: types.FETCH_LOCATIONS_BY_USER_IP_REQUEST,
});

export const setLocationsByUserIp = (locationList) => ({
    type: types.FETCH_LOCATIONS_BY_USER_IP_SUCCESS,
    locationList,
});

export const saveLocation = () => ({
    type: types.SAVE_LOCATION_REQUEST,
});

export const setLocationsRequestLoader = (value) => ({
    type: types.SET_LOCATIONS_REQUEST_LOADER,
    value,
});
