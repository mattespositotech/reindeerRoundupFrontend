import { useState } from "react";
import { CreateAccountContent, ForgotPasswordContent, SignInContent } from "../../../content/SignInPageContent";
import ImageWithContainer from "../containers/ImageWithContainer";

export default function SignInPage() {
    const [display, setDisplay] = useState('signIn');

    const components: { [key: string]: JSX.Element } = {
        'signIn': <SignInContent setDisplay={setDisplay} />,
        'forgot': <ForgotPasswordContent />,
        'create': <CreateAccountContent />
    }
    

    return (
        <ImageWithContainer imgUrl="/src/assets/8816186_santa_santa claus_winter_christmas_house_icon.png"
            content={components[display]} />
    )
}