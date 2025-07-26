
import axios from "axios";
// import { config } from "../../config";

export async function OperatorRegistration(name: string, email: string, contactNo: string, gender: string, password: string, companyName: string, licenseNumber: string, address: string) {

    try {
        const url = `http://localhost:8080/operator/signup`;

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
        throw error;
    }
}