import { createContext, ReactNode, useContext, useState } from "react"
import { User } from "../types/User";
import { signIn } from "../data/user";

interface UserContext {
    getUser: () => User;
    signedIn: boolean;
    signInUser: (email: string, password: string) => Promise<void>
}

const UserContext = createContext<UserContext | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>();
    const [signedIn, setSignedIn] = useState(false);


    async function signInUser(email: string, password: string) {
        const returnEmail = await signIn(email, password)

        setUser({ email: returnEmail })
        setSignedIn(true);
    }

    function getUser() {
        if (user === undefined) throw new Error('No user')
        return user
    }


    return <UserContext.Provider value={{ getUser, signedIn, signInUser }}>
        {children}
    </UserContext.Provider>
}

export function useUserContext() {
    const context = useContext(UserContext);
    if (context === undefined) throw new Error('Cannot use outside provider')
    return context
}
