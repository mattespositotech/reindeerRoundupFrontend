import { CardGroup, Header, Loader } from "semantic-ui-react"
import { useGetRoundupsByUser } from "../../data/roundup"
import RoundupTile from "../../components/roundups/RoundupTile";
import { useGetUser } from "../../context/userContext";

export default function UsersRoundupPage() {
    const user = useGetUser();

    const { data: roundups, loading } = useGetRoundupsByUser(user.email)

    return (
        <div style={{ marginTop: '5em' }}>
            <Header>{user.name}'s Roundups</Header>
            <Loader active={loading} />
            <CardGroup itemsPerRow={5}>
                {roundups && roundups.map((r, index) => <RoundupTile roundup={r} key={index} />)}
            </CardGroup>
        </div>
    )
}