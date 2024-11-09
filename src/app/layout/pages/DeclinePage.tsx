import { useParams } from "react-router-dom";
import { useUpdateParticipantToDecline } from "../../data/roundup";
import { Container, Loader, Message, MessageHeader, MessageContent, Icon } from "semantic-ui-react";
import { useEffect } from "react";

export default function DeclinePage() {
    const { id, uuid } = useParams();
    const { mutate, loading, data } = useUpdateParticipantToDecline();

    const acceptUrl = `/roundup/accept/${id}/${uuid}`

    useEffect(() => {
        mutate(id || "", uuid || "")
    }, [id, uuid])

    return (
        <Container textAlign="center">
            <Loader active={loading} inline />
            {!loading && (data ?
                <Container>
                    <Message size="massive" color="red">
                        <MessageHeader as='h1'>You have declined the invite to join:</MessageHeader>
                        <MessageHeader as='h1' style={{ marginTop: '1rem' }}>{data}</MessageHeader>
                        <MessageContent style={{ marginTop: '1rem' }}>You may now exit this page</MessageContent>
                    </Message>
                    <Message attached='bottom' warning>
                        <Icon name="exclamation" />
                        Clicked the wrong button: <a href={acceptUrl}>Accept Instead</a>
                    </Message>
                </Container> :
                <Container>
                    <Message attached='bottom' warning>
                        <Icon name="exclamation" />
                        It looks like you already decline
                    </Message>
                </Container>)}
        </Container>
    )
}