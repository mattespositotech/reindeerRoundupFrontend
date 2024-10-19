import { createContext, ReactNode, useContext, useState } from "react"
import { User } from "../types/User";
import { createAccount, signIn } from "../data/user";
import { useNavigate } from "react-router-dom";

interface UserContext {
    getUser: () => User;
    signedIn: boolean;
    signInUser: (email: string, password: string) => Promise<void>
    createUserAccount: (email: string, password: string) => Promise<void>
}

const UserContext = createContext<UserContext | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>();
    const [signedIn, setSignedIn] = useState(false);
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

    function getUser() {
        if (user === undefined) throw new Error('No user')
        return user
    }


    return <UserContext.Provider value={{ getUser, signedIn, signInUser, createUserAccount }}>
        {children}
    </UserContext.Provider>
}

export function useUserContext() {
    const context = useContext(UserContext);
    if (context === undefined) throw new Error('Cannot use outside provider')
    return context
}
