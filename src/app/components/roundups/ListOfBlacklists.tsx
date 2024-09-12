import { Grid, GridColumn, Header, List, ListItem, Segment } from "semantic-ui-react";


type ListOfBlacklistsProps = {
    blacklists: string[][];
}

export default function ListOfBlacklists({ blacklists }: ListOfBlacklistsProps) {
    
    return (
        <Grid columns={3}>
            {blacklists.map(((blacklist, index) => (
                <GridColumn key={index}>
                    <Segment raised>
                        <Header as='h4'>Blacklist: {index + 1}</Header>
                        <List>
                            {blacklist.map(name => (
                                <ListItem key={name}>{name}</ListItem>
                            ))}
                        </List>
                    </Segment>
                </GridColumn>
            )))}
        </Grid>
    )
}