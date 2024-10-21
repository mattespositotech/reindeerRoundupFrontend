import { createContext, ReactNode, useContext, useState } from "react"
import { User } from "../types/User";
import { createAccount, resetPassword, signIn, updatePassword } from "../data/user";
import { useNavigate } from "react-router-dom";

interface UserContext {
    getUser: () => User;
    signedIn: boolean;
    signInUser: (email: string, password: string) => Promise<void>
    createUserAccount: (email: string, password: string) => Promise<void>
    resetUserPassword: (email: string) => Promise<void>
    updateUserPassword: (id: string, password: string) => Promise<void>
    logUserOut: () => void
}

const UserContext = createContext<UserContext | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const savedEmail = localStorage.getItem('email');
    const initalUser = savedEmail ? { email: savedEmail } : undefined

    const [user, setUser] = useState<User | undefined>(initalUser);
    const [signedIn, setSignedIn] = useState(!!savedEmail);

    const navigate = useNavigate();

    async function handleUserAuthentication(authFunction: (email: string, password: string) => Promise<string>, email: string, password: string) {
        const returnEmail = await authFunction(email, password);
        setUser({ email: returnEmail });
        setSignedIn(true);
        navigate('/')
    }

    async function signInUser(email: string, password: string) {
        await handleUserAuthentication(signIn, email, password);
    }

    async function createUserAccount(email: string, password: string) {
        await handleUserAuthentication(createAccount, email, password);
    }

    async function resetUserPassword(email: string) {
        await resetPassword(email)
    }

    async function updateUserPassword(id: string, password: string) {
        await updatePassword(id, password)
        navigate('/signIn')
    }

    async function logUserOut() {
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        navigate('/')
        setUser(undefined)
        setSignedIn(false)
    }

    function getUser() {
        if (user === undefined) throw new Error('No user')
        return user
    }


    return <UserContext.Provider value={{ getUser, signedIn, signInUser, createUserAccount, resetUserPassword, updateUserPassword, logUserOut }}>
        {children}
    </UserContext.Provider>
}

export function useUserContext() {
    const context = useContext(UserContext);
    if (context === undefined) throw new Error('Cannot use outside provider')
    return context
}
