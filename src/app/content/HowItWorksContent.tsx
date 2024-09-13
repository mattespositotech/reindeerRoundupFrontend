import { Header, HeaderSubheader } from "semantic-ui-react";

function addParticipants() {
    return (
        <>
            <Header as='h2'>Roundup the Reindeer
                <HeaderSubheader>Add Participants:</HeaderSubheader>
            </Header>
            <p>Start by filling out a simple form that includes your name, event date, and a custom message for participants. Then, add participants by providing their names and emails. Optionally, you can set up a "blacklist" to prevent certain people from being paired with each other during the draw.</p>
        </>
    )
}

function sendInvites() {
    return (
        <>
            <Header as='h2'>Spread the Hoofprints
                <HeaderSubheader>Send Invitations:</HeaderSubheader>
            </Header>
            <p>Once participants are added, our app sends out email invitations to each person, asking them to accept or decline participation in the Secret Santa event. By clicking either option, participants are directed to the website for confirmation.</p>
        </>
    )
}

function drawNames() {
    return (
        <>
            <Header as='h2'>Uncover Your Reindeer Pal
                <HeaderSubheader>Draw Names:</HeaderSubheader>
            </Header>
            <p>After all participants have responded, the app will automatically draw names. Each participant who accepted the invitation will receive an email with the name of their Secret Santa gift recipient.</p>
        </>
    )
}

function exchangeGifts() {
    return (
        <>
            <Header as='h2'>Share the Holiday Cheer
                <HeaderSubheader>Exchange Gifts:</HeaderSubheader>
            </Header>
            <p>On the chosen date, meet up with your group to exchange gifts and enjoy the holiday spirit together!</p>

            <p>Our Secret Santa app makes organizing and drawing names fun and easy, so you can focus on the joy of giving!</p>
        </>
    )
}

export { addParticipants, sendInvites, drawNames, exchangeGifts }