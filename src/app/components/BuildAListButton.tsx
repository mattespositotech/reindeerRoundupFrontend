import { Button } from "semantic-ui-react";
import { useUserContext } from "../context/userContext"
import { Link } from "react-router-dom";

interface BuildAListButtonProps {
    primary: boolean;
}
export default function BuildAListButton({ primary }: BuildAListButtonProps) {
    const { signedIn } = useUserContext();
    const linkUrl = signedIn ? '/roundup' : '/signIn'
    return (
        <Button primary={primary} as={Link} to={linkUrl}>Build A List</Button>
    )
}