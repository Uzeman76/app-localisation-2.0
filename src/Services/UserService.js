import { postApiWithBody } from '../Controllers/ApiController';

export const login = async (email, password) => {
    const data = { email, password };
    return await postApiWithBody("auth/login/", data);
};
