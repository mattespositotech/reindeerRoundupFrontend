import { Container, Header } from "semantic-ui-react";

function aboutUsText() {
    return (
        <Container>
            <Header as='h2' textAlign="center">About Us</Header>
            <p>Reindeer Roundup started as a fun solution to a small family dilemma. Every year, I found myself swapping gifts with the same people, which took away some of the surprise and excitement. So, I decided to create a simple program to shake things up a bit—and it worked! My family loved it so much that I thought, why not turn it into a website? It also gave me a chance to test my web development skills and share the joy with others.</p>
        </Container>
    )
}

export { aboutUsText }