import { Link } from "react-router-dom";
import { Container, Header, Button, List, ListContent, ListDescription, ListHeader, ListItem, Image } from "semantic-ui-react";
import Santa from '../../assets/outside_santa.png'
import Gifts from '../../assets/gifts.png'

const introImage = Santa
const howImage = Gifts


function introText() {
    return (
        <Container>
            <p>Family Secret Santa</p>
            <Header as='h2'>The Easiest Name Randomizer</Header>
            <p>Refresh your holiday traditions with our Secret Santa generator, where we keep immediate family out of the equation, making each gift a discovery of pure delight.</p>
            <Container textAlign="center">
                <Button primary as={Link} to='/roundup'>Build A List</Button>
            </Container>
        </Container>
    )
}

function howItWorks() {
    return (
        <Container>
            <List verticalAlign="middle">
                <ListItem>
                    <Image size="tiny" src='/src/assets/8816186_santa_santa claus_winter_christmas_house_icon.png' />
                    <ListContent>
                        <ListHeader>Roundup the Reindeer</ListHeader>
                        <ListDescription>Add Participants</ListDescription>
                    </ListContent>
                </ListItem>
                <ListItem>
                    <Image size="tiny" src='/src/assets/8816186_santa_santa claus_winter_christmas_house_icon.png' />
                    <ListContent>
                        <ListHeader>Spread the Hoofprints</ListHeader>
                        <ListDescription>Send Invitations</ListDescription>
                    </ListContent>
                </ListItem>
                <ListItem>
                    <Image size="tiny" src='/src/assets/8816186_santa_santa claus_winter_christmas_house_icon.png' />
                    <ListContent>
                        <ListHeader>Uncover your Reindeer Pal</ListHeader>
                        <ListDescription>Draw Names</ListDescription>
                    </ListContent>
                </ListItem>
                <ListItem>
                    <Image size="tiny" src='/src/assets/8816186_santa_santa claus_winter_christmas_house_icon.png' />
                    <ListContent>
                        <ListHeader>Share the Holiday Cheer</ListHeader>
                        <ListDescription>Exchange Gifts</ListDescription>
                    </ListContent>
                </ListItem>
            </List>
            <Container textAlign="center">
                <Button as={Link} to='/howItWorks' secondary>How It Works</Button>
            </Container>
        </Container>
    )
}

export { introImage, introText, howImage, howItWorks }