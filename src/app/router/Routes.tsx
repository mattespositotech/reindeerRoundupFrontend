import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import RoundupPageOld from "../layout/pages/RoundupPageOld";
import RoundupPage from "../layout/pages/RoundupPage";
import HomePage from "../layout/pages/HomePage";
import SignInPage from "../layout/pages/SignInPage";
import UsersRoundupPage from "../layout/pages/UsersRoundupPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/', element: <HomePage />},
            {path: '/roundupold', element: <RoundupPageOld />},
            {path: '/roundup', element: <RoundupPage />},
            {path: '/signIn', element: <SignInPage />},
            {path: '/roundup/user', element: <UsersRoundupPage />}
        ]
    }
])