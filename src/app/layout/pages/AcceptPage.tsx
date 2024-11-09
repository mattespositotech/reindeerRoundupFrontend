import { useParams } from "react-router-dom";
import { Container, Icon, Loader, Message, MessageContent, MessageHeader } from "semantic-ui-react";
import { useUpdateParticipantToAccepted } from "../../data/roundup";
import { useEffect } from "react";

export default function AcceptPage() {
    const { id, uuid } = useParams();
    const { mutate, loading, data } = useUpdateParticipantToAccepted();

    const declineUrl = `/roundup/decline/${id}/${uuid}`

    useEffect(() => {
        mutate(id || "", uuid || "")
    }, [id, uuid])

    return (
        <Container textAlign="center">
            <Loader active={loading} inline />
            {!loading && (data ?
                <Container>
                    <Message size="massive" color="green">
                        <MessageHeader as='h1'>You have accepted the invite to join:</MessageHeader>
                        <MessageHeader as='h1' style={{ marginTop: '1rem' }}>{data}</MessageHeader>
                        <MessageContent style={{ marginTop: '1rem' }}>You may now exit this page</MessageContent>
                    </Message>
                    <Message attached='bottom' warning>
                        <Icon name="exclamation" />
                        Clicked the wrong button: <a href={declineUrl}>Decline Instead</a>
                    </Message>
                </Container> :
                <Container>
                    <Message attached='bottom' warning>
                        <Icon name="exclamation" />
                        It looks like you already accepted
                    </Message>
                </Container>)}
        </Container>
    )
}