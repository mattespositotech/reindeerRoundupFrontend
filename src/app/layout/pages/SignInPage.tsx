import { useState } from "react";
import { CreateAccountContent, ForgotPasswordContent, SignInContent } from "../../content/SignInPageContent";
import ImageWithContainer from "../containers/ImageWithContainer";
import GranddadGift from '../../../assets/grandad_gift_grandson.png'

export default function SignInPage() {
    const [display, setDisplay] = useState('signIn');

    const components: { [key: string]: JSX.Element } = {
        'signIn': <SignInContent setDisplay={setDisplay} />,
        'forgot': <ForgotPasswordContent />,
        'create': <CreateAccountContent />
    }
    

    return (
        <ImageWithContainer imgUrl={GranddadGift}
            content={components[display]} />
    )
}