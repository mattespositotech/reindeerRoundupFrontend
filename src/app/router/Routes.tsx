import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import RoundupPage from "../layout/pages/RoundupPage";
import HomePage from "../layout/pages/HomePage";
import SignInPage from "../layout/pages/SignInPage";
import UsersRoundupPage from "../layout/pages/UsersRoundupPage";
import RoundupDetails from "../components/roundups/RoundupDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/roundup', element: <RoundupPage /> },
            { path: '/signIn', element: <SignInPage /> },
            { path: '/roundup/user', element: <UsersRoundupPage /> },
            { path: '/roundup/:id', element: <RoundupDetails /> }
        ]
    }
])