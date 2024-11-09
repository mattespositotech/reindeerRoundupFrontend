import { CardGroup, Header, Segment } from "semantic-ui-react"
import { useGetRoundupsByUser } from "../../data/roundup"
import RoundupTile from "../../components/roundups/RoundupTile";
import { useUserContext } from "../../context/userContext";
import AddRoundupTile from "../../components/roundups/AddRoundupTile";

export default function UsersRoundupPage() {
    const { getUser } = useUserContext();

    const { data: roundups, loading } = useGetRoundupsByUser(getUser().email)

    return (
        <Segment raised padded loading={loading}>
            <Header as='h2'>Your Roundups:</Header>
                <CardGroup itemsPerRow={5}>
                    {roundups && roundups.map((r, index) => <RoundupTile roundup={r} key={index} />)}
                    <AddRoundupTile />
                </CardGroup>
        </Segment >
    )
}