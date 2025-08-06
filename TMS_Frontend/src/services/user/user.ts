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

export async function loginUser(email: string, password: string):Promise<User | null > {
    try {
        const url = `${config.serverUrl}/user`

        const body = {
            email,
            password,
        }

        const response:AxiosResponse<User> = await axios.post(url, body)

        if (response.status == 200) {
            return response.data
        } else {
            return null
        }
    } catch (ex) {
        console.log(`exception: `, ex)
    }
    return null;
}




const userId = 1;

export async function getUserProfile(userId: number) {
    try {
        const url = `${config.serverUrl}/user/get/${userId}`;
        const res = await axios.get(url);
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

export async function updateUserProfile(userId: number, body: userProfile) {
    try {
        const url: string = `${config.serverUrl}/user/update/${userId}`;
        const res = await axios.put(url, body);
        if (res.status == 200)
            return res.data;
    } catch (e) {
        console.log(e);
    }
}



