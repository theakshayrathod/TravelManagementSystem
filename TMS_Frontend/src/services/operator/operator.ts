
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
        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }

    } catch (error) {
        console.error("Error during operator registration:", error);
    }

    return null;
}



const operatorId = 1;

export async function getOperatorProfile(id: number) {

    try {


        const URL = `${config.serverUrl}/operator/profile/${id}`;
        const res = await axios.get(URL);
        if (res.status == 200)
            return res.data;
    } catch (e) {
        console.log(e);
    }

}

// export async function getOpProfile(id: number) {

//     try {


//         const URL = `${config.serverUrl}/operator/profile/${id}`;
//         const res = await axios.get(URL);
//         if (res.status == 200)
//             return res.data;
//     } catch (e) {
//         console.log(e);
//     }

// }

export type operatorProfile = {
    name: string,
    email: string,
    contactNo: string,
    companyName: string,
    licenseNumber: string,
    address: string
}

export async function updateOperatorProfile(id: number, body: operatorProfile) {

    try {
        const url = `${config.serverUrl}/operator/update-profile/${operatorId}`;



        const res = await axios.put(url, body);

        if (res.status == 200)

            return res.data;

    } catch (e) {
        console.log(e);
    }

}


