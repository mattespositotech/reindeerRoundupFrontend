import { Grid, GridColumn, Header, List, ListItem, Segment } from "semantic-ui-react";
import { Participant } from "../../types/RoundupTypes";

type ListOfBlacklistsProps = {
    blacklists: string[][];
    particpipants: Participant[];
}

function createParticipantDictionary(participants: Participant[]): { [email: string]: string } {
    return participants.reduce((acc, participant) => {
        acc[participant.email] = participant.name;
        return acc;
    }, {} as { [email: string]: string });
}
export default function ListOfBlacklists({ blacklists, particpipants }: ListOfBlacklistsProps) {
    const participantDictionary = createParticipantDictionary(particpipants);
    return (
        <Grid columns={3}>
            {blacklists.map(((blacklist, index) => (
                <GridColumn key={index}>
                    <Segment raised>
                        <Header as='h4'>Blacklist: {index + 1}</Header>
                        <List>
                            {blacklist.map(email => (
                                <ListItem key={email}>{participantDictionary[email]}</ListItem>
                            ))}
                        </List>
                    </Segment>
                </GridColumn>
            )))}
        </Grid>
    )
}