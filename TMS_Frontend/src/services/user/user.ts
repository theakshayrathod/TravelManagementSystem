import axios, { type AxiosResponse } from "axios"
// import { config } from "../config"
import { UserProfileUpdate } from './../../Pages/user/UpdateProfile';
import { UserProfile } from './../../Pages/user/Profile';
import { config } from "../../config";
import type { User } from "../../Pages/auth/Login";




export async function UserRegistration(name: string, email: string, contactNo: string, gender: string, password: string) {
    try {
        const url = `${config.serverUrl}/user/signup`

        const body = {
            name,
            email,
            contactNo,
            gender,
            password

        }

        const response = await axios.post(url, body)

        if (response.status == 200)
            return response.data
        else
            return null

    } catch (e) {
        console.log(e)
    }
}

export type AuthResponse = {
    message: string
    jwt: string
    name: string
    email: string
    role: string
} | null

export async function loginUser(email: string, password: string): Promise<AuthResponse | null> {
    try {
        const url = `${config.serverUrl}/user/signin`

        const body = {
            email,
            password,
        }

        const response: AxiosResponse<AuthResponse> = await axios.post(url, body)

        if (response.status == 200 ) {
            return response.data
        } else {
            return null
        }
    } catch (ex) {
        console.log(`exception: `, ex)
    }
    return null;
}






export async function getUserProfile() {
    try {
        const url = `${config.serverUrl}/user/get`;
        const token = localStorage.getItem("jwt");
        const res = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
        if (res.status == 200)
            return res.data;
    } catch (e) {
        console.log(e);
    }
}

export type userProfile = {
    name: string,
    email: string,
    contact: string,
    gender: string
}

export async function updateUserProfile(body: userProfile) {
    try {
        const url: string = `${config.serverUrl}/user/update`;
        const token: string | null = localStorage.getItem("jwt");
        if (token) {
            const res = await axios.put(url, body, {headers : {Authorization : `Bearer ${token}`}});
            if (res.status == 200)
                return res.data;
        }


    } catch (e) {
        console.log(e);
    }
}

export const changePassword = async (
    currentPassword: string,
    newPassword: string
) => {
    const token: string | null = localStorage.getItem("jwt")

    const response = await axios.put(`${config.serverUrl}/user/change-password`, {
        currentPassword,
        newPassword,
    },{headers : { Authorization : `Bearer ${token}`}});
    return response.data;
};



