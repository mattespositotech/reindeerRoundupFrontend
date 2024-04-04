import { Container, Header, List, ListItem, Image, ListContent, ListHeader, ListDescription, Button } from "semantic-ui-react";

const introImage = '/src/assets/8816187_gifts_christmas_gifting_wrapping_candy_icon (1).png'

function introText() {
    return (
        <Container>
            <p>Family Secret Santa</p>
            <Header as='h2'>The Easiest Name Randomizer</Header>
            <p>Refresh your holiday traditions with our Secret Santa generator, where we keep immediate family out of the equation, making each gift a discovery of pure delight.</p>
            <Container textAlign="center">
                <Button primary>Build A List</Button>
            </Container>
        </Container>
        )
  }

const howImage = '/src/assets/8816186_santa_santa claus_winter_christmas_house_icon.png'

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
                <Button secondary>How It Works</Button>
            </Container>
        </Container>
    )
}

export { introImage, introText, howImage, howItWorks }