import { saveData } from "./crudFunctions";

const baseUrl = "http://127.0.0.1:10000/";


function useSignIn() {
    const url = baseUrl + "login";

    const mutate = async (email: string, password: string) => {
        const token = await saveData<{email: string, password: string}, string>(url, {email, password})
        localStorage.setItem('token', token);
    }

    return {mutate}
}

export {useSignIn}