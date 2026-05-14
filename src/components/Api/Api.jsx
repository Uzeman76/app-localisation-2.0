const BASE_URL = 'http://89.80.248.46:84/'

export const getApiUrl = (endpoint) => {

    const cleanEndpoint = endpoint.startWith('/') ? endpoint : `/${endpoint}`;
    return `${BASE_URL}${cleanEndpoint}`;
};