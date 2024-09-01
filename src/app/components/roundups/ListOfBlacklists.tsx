import { Grid, GridColumn, Header, List, ListItem, Segment } from "semantic-ui-react";
import { ParticipantDictionary } from "../../types/RoundupTypes";


type ListOfBlacklistsProps = {
    blacklists: string[][];
    participantDictionary: ParticipantDictionary;
}

export default function ListOfBlacklists({ blacklists, participantDictionary }: ListOfBlacklistsProps) {
    
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