import { CardGroup, Header, Loader } from "semantic-ui-react"
import { useGetRoundupsByUser } from "../../data/roundup"
import RoundupTile from "../../components/roundups/RoundupTile";

export default function UsersRoundupPage() {
    // eventually from user contenxt
    const user = {
        name: 'Test User',
        email: 'test@gmail.com'
    }

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