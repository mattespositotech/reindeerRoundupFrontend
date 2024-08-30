import { Button, Icon } from "semantic-ui-react"
import { Roundup } from "../../types/RoundupTypes"
import { status as roundupStatus } from "../../enums/RoundupEnums"
import { useSetAllParticipantsToAccepted } from "../../data/roundup"
import { useNavigate } from "react-router-dom"
import { status as userStatus } from "../../enums/UserEnums"

type ActionsToolbarProps = {
    roundup: Roundup
}
export default function ActionsToolbar({ roundup }: ActionsToolbarProps) {
    const navigate = useNavigate();
    const { mutate, loading } = useSetAllParticipantsToAccepted();

    // replace with env check
    const testEnv = true;

    const displayAcceptBtn = testEnv && roundup.participants.some(part => part.status !== userStatus.accepted)

    return (
        <div>
            {displayAcceptBtn && <Button icon labelPosition="left" color='green' onClick={() => {
                mutate(roundup._id);
                navigate(0)
            }
            }
                loading={loading}>
                <Icon name='check circle' />
                Set Everyone To Accepted
            </Button>}
            {roundup.status === roundupStatus.inProgress &&
                <Button icon labelPosition="left" color='blue'>
                    <Icon name='shipping fast' />
                    Launch Early
                </Button>}
            {roundup.status === roundupStatus.complete &&
                <Button icon labelPosition="left" color='purple'>
                    <Icon name='eye' />
                    See Matches
                </Button>}
        </div>
    )
}