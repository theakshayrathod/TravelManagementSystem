import axios from "axios"
import { config } from "../config"

export async function UserRegistration(name: string, email: string, contact: string, password: string) {
    try {
        const url = `${config.serverUrl}/user/signup`

        const body = {
            name,
            email,
            contact,
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
        const url = `${config.serverUrl}/user/login`

        const body = {
            email,
            password,
        }

        const response = await axios.post(url, body)

        if (response.status == 200) {
            return response.data
        } else {

            return null
        }
    } catch (ex) {
        console.log(`exception: `, ex)
    }
}

