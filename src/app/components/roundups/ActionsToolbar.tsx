import { Button, Icon } from "semantic-ui-react"
import { Roundup } from "../../types/RoundupTypes"
import { status as roundupStatus } from "../../enums/RoundupEnums"
import { useLaunchRoundup, useSetAllParticipantsToAccepted } from "../../data/roundup"
import { useNavigate } from "react-router-dom"
import { status as userStatus } from "../../enums/UserEnums"

type ActionsToolbarProps = {
    roundup: Roundup;
    seeMatches: boolean;
    toggleMatches: () => void;
}
export default function ActionsToolbar({ roundup, seeMatches, toggleMatches }: ActionsToolbarProps) {
    const navigate = useNavigate();
    const setAllAccepted = useSetAllParticipantsToAccepted();
    const launchRoundup = useLaunchRoundup();

    const testEnv = import.meta.env.VITE_ENV === 'dev';

    const displayAcceptBtn = testEnv && roundup.participants.some(part => part.status !== userStatus.accepted)

    return (
        <div>
            {displayAcceptBtn && <Button icon labelPosition="left" color='green' onClick={async () => {
                await setAllAccepted.mutate(roundup._id);
                navigate(0)
            }
            }
                loading={setAllAccepted.loading}>
                <Icon name='check circle' />
                Set Everyone To Accepted
            </Button>}

            {roundup.status === roundupStatus.inProgress &&
                <Button icon labelPosition="left" color='blue' onClick={async () => {
                    await launchRoundup.mutate(roundup._id);
                    navigate(0);
                }} loading={launchRoundup.loading}>
                    <Icon name='shipping fast' />
                    Launch Early
                </Button>}

            {roundup.status === roundupStatus.complete &&
                <Button icon labelPosition="left" color='purple' onClick={toggleMatches}>
                    <Icon name='eye' />
                    {seeMatches ? 'Hide' : 'See'} Matches
                </Button>}
        </div>
    )
}