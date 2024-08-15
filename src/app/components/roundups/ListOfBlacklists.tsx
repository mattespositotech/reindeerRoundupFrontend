import { Grid, GridColumn, Header, List, ListItem, Segment } from "semantic-ui-react";
import { Participant } from "../../types/RoundupTypes";

type ListOfBlacklistsProps = {
    blacklists: number[][];
    particpipants: Participant[];
}

function createParticipantDictionary(participants: Participant[]): { [id: number]: string } {
    return participants.reduce((acc, participant) => {
        acc[participant.id] = participant.name;
        return acc;
    }, {} as { [id: number]: string });
}
export default function ListOfBlacklists({ blacklists, particpipants }: ListOfBlacklistsProps) {
    const participantDictionary = createParticipantDictionary(particpipants);
    return (
        <Grid columns={3}>
            {blacklists.map(((blacklist, index) => (
                <GridColumn>
                    <Segment raised>
                        <Header as='h4'>Blacklist: {index+1}</Header>
                        <List>
                            {blacklist.map(id => (
                                <ListItem key={id}>{participantDictionary[id]}</ListItem>
                            ))}
                        </List>
                    </Segment>
                </GridColumn>
            )))}
        </Grid>
    )
}