
import axios from "axios";
import { config } from "../../config";
import type { ApiResponse } from "./route";
// import { config } from "../../config";

export async function OperatorRegistration(name: string, email: string, contactNo: string, gender: string, password: string, companyName: string, licenseNumber: string, address: string): Promise<ApiResponse | null> {

    try {
        const url: string = `${config.serverUrl}/operator/signup`;

        const body = {
            name,
            email,
            contactNo,
            gender: gender.toUpperCase(),
            password,
            companyName,
            licenseNumber,
            address
        }
        console.log(body)
        const response = await axios.post(url, body);
        console.log(response)
        if (response.status === 201) {
            return response.data;
        } else {
            return null;
        }

    } catch (error) {
        console.error("Error during operator registration:", error);
    }

    return null;
}





export async function getOperatorProfile() {

    try {

        const token: string | null = localStorage.getItem("jwt")
        if (token) {


            const URL = `${config.serverUrl}/operator/get`;
            const res = await axios.get(URL, { headers: { Authorization: `Bearer ${token}` } });
            if (res.status == 200)
                return res.data;
        }
    } catch (e) {
        console.log(e);
    }

}



export type operatorProfile = {
    name: string,
    email: string,
    contactNo: string,
    companyName: string,
    licenseNumber: string,
    address: string
}

export async function updateOperatorProfile(body: operatorProfile) {

    try {
        const url = `${config.serverUrl}/operator/update`;
        const token: string | null = localStorage.getItem("jwt")

        if (token) {
            const res = await axios.put(url, body, { headers: { Authorization: `Bearer ${token}` } });
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
    }, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
};

