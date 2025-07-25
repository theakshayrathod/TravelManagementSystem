
import axios from "axios";
import { config } from "../../config";

export async function OperatorRegistration(name: string, email: string, contactNo: string, gender: string, password: string, companyName: string, licenseNumber: string, address: string) {
    // Implement the registration logic here
    try{
        const url = `${config.serverUrl}/operator/signup`;

        const body ={
            name,
            email,
            contactNo,
            gender,
            password,
            companyName,
            licenseNumber,
            address
        }

        const response = await axios.post(url, body);
        if(response.status === 200) {
            return response.data;
        }else {
            return null;
        }

    } catch (error) {
        console.error("Error during operator registration:", error);
        throw error;
    }
}