import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import RoundupPage from "../layout/pages/RoundupPage";
import HomePage from "../layout/pages/HomePage";
import SignInPage from "../layout/pages/SignInPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/', element: <HomePage />},
            {path: '/roundup', element: <RoundupPage />},
            {path: '/signIn', element: <SignInPage />}
        ]
    }
])