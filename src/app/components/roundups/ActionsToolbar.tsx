import { Button, Icon } from "semantic-ui-react"
import { Roundup } from "../../types/RoundupTypes"
import { status } from "../../enums/RoundupEnums"
import { useSetAllParticipantsToAccepted } from "../../data/roundup"
import { useNavigate } from "react-router-dom"

type ActionsToolbarProps = {
    roundup: Roundup
}
export default function ActionsToolbar({ roundup }: ActionsToolbarProps) {
    const navigate = useNavigate();
    const { mutate, loading } = useSetAllParticipantsToAccepted();


    return (
        <div>
            <Button icon labelPosition="left" color='green' onClick={() => {
                mutate(roundup._id);
                navigate(0)
            }
            }
                loading={loading}>
                <Icon name='check circle' />
                Set Everyone To Accepted
            </Button>
            {roundup.status === status.inProgress &&
                <Button icon labelPosition="left" color='blue'>
                    <Icon name='shipping fast' />
                    Launch Early
                </Button>}
            {roundup.status === status.complete &&
                <Button icon labelPosition="left" color='purple'>
                    <Icon name='eye' />
                    See Matches
                </Button>}
        </div>
    )
}