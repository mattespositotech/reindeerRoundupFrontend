import { useState } from "react"
import { Button, Popup } from "semantic-ui-react"
import { useResend } from "../../data/roundup"

type ResendInviteProps = {
    id: string;
    email: string;
}

export default function ResendInvite({ id, email }: ResendInviteProps) {
    const [clicked, setClicked] = useState(false)
    const resend = useResend()

    async function onClick() {
        await resend.mutate({ id, email })
        setClicked(true)
    }
    return (
        <>
            {clicked ? (
                <Popup content='Invite Sent' trigger={<Button icon='check' color='green' />} />
            ) : (
                <Popup content='Resend Invite' trigger={<Button icon='mail' color='blue' onClick={onClick} loading={resend.loading} />} />
            )}
        </>
    )
}