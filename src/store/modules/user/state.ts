import { StateUser, User } from "@/types/user";
import { decodeToken } from "@/utils/decodeToken";

const accessToken = localStorage.getItem('accessToken');

export const initState = (): StateUser => {
    return {
        user: accessToken ? decodeToken(accessToken) as User : null,
        loading: false,
        error: null
    }
}