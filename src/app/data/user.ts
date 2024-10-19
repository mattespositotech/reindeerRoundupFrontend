import { UserAuthReturn } from "../types/User";
import { saveData } from "./crudFunctions";

const baseUrl = "http://127.0.0.1:10000/";


async function signIn(email: string, password: string){
    const url = baseUrl + "user/login";
    const response = await saveData<{email: string, password: string}, UserAuthReturn>(url, {email, password})
    localStorage.setItem('token', response.access_token);
    return response.email
}

export {signIn}