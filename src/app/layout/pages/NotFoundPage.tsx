import { Link } from "react-router-dom";
import { Button, Container, Header, Image } from "semantic-ui-react";
import snowman from '../../../assets/meltingsnowman.png'

export default function NotFoundPage() {
    return (
        <Container style={{ marginTop: '5em' }} textAlign="center">
            <Header as='h1'>Page Not Found!</Header>

            <Image src={snowman} centered />

            <Button as={Link} to='/' primary>Back to Homepage</Button>
        </Container>
    )
}