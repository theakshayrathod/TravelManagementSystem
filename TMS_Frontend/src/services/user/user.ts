import axios from "axios"
// import { config } from "../config"
import { UserProfileUpdate } from './../../Pages/user/UpdateProfile';
import { UserProfile } from './../../Pages/user/Profile';
import { config } from "../../config";




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

export async function loginUser(email: string, password: string) {
    try {
        const url = `${config.serverUrl}/user`

        const body = {
            email,
            password,
        }

        const response = await axios.post(url, body)
        console.log(response)

        if (response.status == 200) {
            return response.data
        } else {

            return null
        }
    } catch (ex) {
        console.log(`exception: `, ex)
    }
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

export const changePassword = async (
  userId: number,
  currentPassword: string,
  newPassword: string
) => {
  const response = await axios.put(`${config.serverUrl}/user/change-password/${userId}`, {
    currentPassword,
    newPassword,
  });
  return response.data;
};



