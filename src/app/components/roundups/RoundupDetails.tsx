import { useParams } from "react-router-dom"
import { Container, Header, HeaderContent, Icon, Label, Loader } from "semantic-ui-react";
import { useGetRoundupById } from "../../data/roundup";
import ParticipantsTable from "./ParticipantsTable";
import ListOfBlacklists from "./ListOfBlacklists";
import { colorToStatus } from "../../utils/Colors";
import { statusDisplayName } from "../../enums/RoundupEnums";

export default function RoundupDetails() {
    const { id } = useParams();

    const { data: roundup, loading } = useGetRoundupById(id ?? "");
    return (
        <Container style={{ marginTop: '5em' }}>
            <Loader active={loading} />
            {roundup &&
                <>
                    <Header as='h1'>
                        <HeaderContent style={{paddingRight: '1em'}}>{roundup.name}</HeaderContent>
                        <Label tag color={colorToStatus(roundup.status)}>{statusDisplayName[roundup.status]}</Label></Header>
                    <Header as='h3'><Icon name='calendar' />Launch Date: {roundup.date}</Header>
                    {roundup.message && <>
                        <Header as='h3'><Icon name='envelope' />Message Sent To Participants</Header>
                        <p>{roundup.message}</p> </>}
                    <Header as='h3'><Icon name='user'/>Participants</Header>
                    <ParticipantsTable participants={roundup.participants} />
                    <Header as='h3'><Icon name='ban' />Blacklists</Header>
                    <ListOfBlacklists blacklists={roundup.blacklists} particpipants={roundup.participants} />
                </>
            }
        </Container>
    )
}