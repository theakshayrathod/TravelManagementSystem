import axios from "axios"
// import { config } from "../config"
import { UserProfileUpdate } from './../../Pages/user/UpdateProfile';
import { UserProfile } from './../../Pages/user/Profile';
import { config } from "../../config";

export async function UserRegistration(name: string, email: string, contactNo: string, password: string) {
    try {
        const url = `http://localhost:8080/user/signup`

        const body = {
            name,
            email,
            contactNo,
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
        const url = `http://localhost:8080/user`

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


export async function getRoutes() {
  try {
    const url = "http://localhost:8080/route";
    const response = await axios.get(url);
    if (response.status === 200) {
        console.log(response)
      return response.data; 
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return [];
  }
}

const userId = 1;

export async function getUserProfile(userId: number){
    try{
        const url = `http://localhost:8080/user/update-user/${userId}`;
        const res = await axios.get(url);
        if (res.status == 200)
      return res.data;
    }catch( e){
        console.log(e);
    }
}

export type userProfile ={
    name: string,
    email:string,
    contact:string,
    gender:string
}

export async function updateUserProfile(userId:number, body: userProfile ){
    try{
        const url:string = `http://localhost:8080/user/update-user/${userId}`;
        const res = await axios.put(url,body);
        if(res.status == 200)
            return res.data;
    }catch(e){
        console.log(e);
    }
}



