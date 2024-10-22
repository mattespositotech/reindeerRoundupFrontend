import { UserAuthReturn } from "../types/User";
import { saveData } from "./crudFunctions";
import createUrl from "./utils/createUrl";

async function authenticateUser(endpoint: string, email: string, password: string): Promise<string> {
    const url = createUrl(endpoint)
    const response = await saveData<{ email: string, password: string }, UserAuthReturn>(url, { email, password });
    localStorage.setItem('token', response.access_token);
    localStorage.setItem('email', response.email)
    return response.email;
}


async function signIn(email: string, password: string): Promise<string> {
    return authenticateUser("user/login", email, password);
}

async function createAccount(email: string, password: string): Promise<string> {
    return authenticateUser("user/signup", email, password);
}

async function resetPassword(email: string) {
    const url = createUrl(`user/resetpassword?email=${email}`)
    await saveData(url, {})
}

async function updatePassword(id: string, password: string) {
    const url = createUrl('user/updatepassword')
    await saveData(url, {id, password})
}

export {signIn, createAccount, resetPassword, updatePassword}