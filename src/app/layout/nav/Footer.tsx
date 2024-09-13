import { Link } from "react-router-dom";
import { Container, Grid, Header, Image, Segment, List, ListItem, ListHeader, ListContent, GridColumn, Button } from "semantic-ui-react";

export default function Footer() {
    return (
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '3em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <GridColumn width={8} floated="left">
                        <List verticalAlign="middle">
                            <ListItem>
                                <Image size='tiny' src='/src/assets/Raindeer Roundup.png' />
                                <ListContent>
                                    <ListHeader>Reindeer Roundup</ListHeader>
                                </ListContent>
                            </ListItem>
                        </List>
                    </GridColumn>
                    <GridColumn width={4} textAlign="left">
                        <Header as='h4'>Browse</Header>
                        <List>
                            <ListItem as={Link} to='/'>Home</ListItem>
                            <ListItem as={Link} to='/about'>About</ListItem>
                            <ListItem as={Link} to='/howItWorks'>How It Works</ListItem>
                            <ListItem as={Link} to='/signIn'>Register</ListItem>
                            <ListItem as='a'>Privacy Policy</ListItem>
                            <ListItem as='a'>Terms and Conditions</ListItem>
                        </List>
                    </GridColumn>
                    <GridColumn width={4}>
                        <Header as='h3'>Get Start Today</Header>
                        <Button as={Link} to='/roundup'>Build A List</Button>
                    </GridColumn>
                </Grid>
            </Container>
        </Segment>
    )
}