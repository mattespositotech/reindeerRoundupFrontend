import { useParams } from "react-router-dom"
import { Container, Header, HeaderContent, Icon, Label, Loader } from "semantic-ui-react";
import { useGetRoundupById } from "../../data/roundup";
import ParticipantsTable from "../../components/roundups/ParticipantsTable";
import ListOfBlacklists from "../../components/roundups/ListOfBlacklists";
import { colorToStatus } from "../../utils/Colors";
import { statusDisplayName } from "../../enums/RoundupEnums";
import ActionsToolbar from "../../components/roundups/ActionsToolbar";
import MatchesTable from "../../components/roundups/MatchesTable";
import { Participant } from "../../types/RoundupTypes";
import { useState } from "react";

function createParticipantDictionary(participants: Participant[] = []): { [email: string]: string } {
    return participants.reduce((acc, participant) => {
        acc[participant.email] = participant.name;
        return acc;
    }, {} as { [email: string]: string });
}

export default function RoundupDetailsPage() {
    const { id } = useParams();
    const { data: roundup, loading } = useGetRoundupById(id ?? "");

    const [seeMatches, setSeeMatches] = useState(false);

    const toggleMatches = () => setSeeMatches(!seeMatches);

    const participantDictionary = createParticipantDictionary(roundup?.participants);
    const matchesFileName = `${roundup?.name} Matches`;
    return (
        <Container style={{ marginTop: '5em' }}>
            <Loader active={loading} />
            {roundup &&
                <>
                    <Header as='h1'>
                        <HeaderContent style={{ paddingRight: '1em' }}>{roundup.name}</HeaderContent>
                        <Label tag color={colorToStatus(roundup.status)}>{statusDisplayName[roundup.status]}</Label></Header>
                    <Header as='h3'><Icon name='calendar' />Launch Date: {roundup.date}</Header>
                    {roundup.message && <>
                        <Header as='h3'><Icon name='envelope' />Message Sent To Participants</Header>
                        <p>{roundup.message}</p> </>}
                    <Header as='h3'><Icon name='user' />Participants</Header>
                    <ParticipantsTable participants={roundup.participants} />
                    <Header as='h3'><Icon name='ban' />Blacklists</Header>
                    <ListOfBlacklists blacklists={roundup.blacklists} participantDictionary={participantDictionary} />
                    <Header as='h3'><Icon name='bolt' />Actions</Header>
                    <ActionsToolbar roundup={roundup} seeMatches={seeMatches} toggleMatches={toggleMatches} />
                    {seeMatches && <MatchesTable matches={roundup.matches} matchesFileName={matchesFileName} />}
                </>
            }
        </Container>
    )
}