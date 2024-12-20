import { Grid, GridColumn, GridRow, Header, List, ListItem, Segment } from "semantic-ui-react";
import AddBlacklist from "./AddBlacklist";
import { Roundup } from "../../types/RoundupTypes";
import DeleteBlacklist from "./DeleteBlacklist";
import EditBlacklist from "./EditBlacklist";
import { status as roundupStatus } from "../../enums/RoundupEnums"


type ListOfBlacklistsProps = {
    roundup: Roundup;
}

export default function ListOfBlacklists({ roundup }: ListOfBlacklistsProps) {

    return (
        <Grid columns={4}>
            {roundup.blacklists.map(((blacklist, index) => (
                <GridColumn key={index}>
                    <Segment raised>
                        <Grid columns={2}>
                            <GridRow>
                                <GridColumn width={8}>
                                    <Header as='h4'>Blacklist: {index + 1}</Header>
                                    <List>
                                        {blacklist.blacklist.map(name => (
                                            <ListItem key={name}>{name}</ListItem>
                                        ))}
                                    </List>
                                </GridColumn>
                                {roundup.status !== roundupStatus.complete &&
                                    <GridColumn>
                                        <DeleteBlacklist roundupId={roundup._id} blacklistId={blacklist.uuid} />
                                        <EditBlacklist roundup={roundup} blacklistIndex={index} />
                                    </GridColumn>}
                            </GridRow>
                        </Grid>
                    </Segment>
                </GridColumn>
            )))}
            {roundup.status !== roundupStatus.complete && <AddBlacklist roundup={roundup} />}
        </Grid>
    )
}