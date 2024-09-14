import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import RoundupPage from "../layout/pages/RoundupPage";
import HomePage from "../layout/pages/HomePage";
import SignInPage from "../layout/pages/SignInPage";
import UsersRoundupPage from "../layout/pages/UsersRoundupPage";
import RoundupDetailsPage from "../layout/pages/RoundupDetailsPage";
import AcceptPage from "../layout/pages/AcceptPage";
import DeclinePage from "../layout/pages/DeclinePage";
import AboutUsPage from "../layout/pages/AboutUsPage";
import HowItWorksPage from "../layout/pages/HowItWorksPage";
import PrivacyPolicy from "../layout/pages/PrivacyPolicy";
import TermsAndConditionsPage from "../layout/pages/TermsAndConditionsPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/about', element: <AboutUsPage /> },
            { path: '/howItWorks', element: <HowItWorksPage /> },
            { path: '/roundup', element: <RoundupPage /> },
            { path: '/signIn', element: <SignInPage /> },
            { path: 'privacyPolicy', element: <PrivacyPolicy /> },
            { path: '/termsAndConditions', element: <TermsAndConditionsPage /> },
            { path: '/roundup/user', element: <UsersRoundupPage /> },
            { path: '/roundup/:id', element: <RoundupDetailsPage /> },
            { path: '/roundup/accept/:id/:uuid', element: <AcceptPage /> },
            { path: '/roundup/decline/:id/:uuid', element: <DeclinePage /> }
        ]
    }
])