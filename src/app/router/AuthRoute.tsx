import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

type AuthRouteProps = {
    children: ReactNode;
}
export default function AuthRoute({ children }: AuthRouteProps) {
    const { signedIn } = useUserContext();

    if (!signedIn) return <Navigate to='/' replace />

    return children
}