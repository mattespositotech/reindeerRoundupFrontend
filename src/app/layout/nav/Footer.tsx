import { Link } from "react-router-dom";
import { Container, Grid, Header, Image, Segment, List, ListItem, ListHeader, ListContent, GridColumn } from "semantic-ui-react";
import Logo from '../../../assets/Raindeer Roundup.png'
import BuildAListButton from "../../components/BuildAListButton";

export default function Footer() {
    return (
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '3em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <GridColumn width={8} floated="left">
                        <List verticalAlign="middle">
                            <ListItem>
                                <Image size='tiny' src={Logo} />
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
                            <ListItem as={Link} to='privacyPolicy'>Privacy Policy</ListItem>
                            <ListItem as={Link} to='/termsAndConditions'>Terms and Conditions</ListItem>
                        </List>
                    </GridColumn>
                    <GridColumn width={4}>
                        <Header as='h3'>Get Start Today</Header>
                        <BuildAListButton primary={false} />
                    </GridColumn>
                </Grid>
            </Container>
        </Segment>
    )
}