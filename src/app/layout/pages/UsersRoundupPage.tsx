import { CardGroup, Header, Loader } from "semantic-ui-react"
import { useGetRoundupsByUser } from "../../data/roundup"
import RoundupTile from "../../components/roundups/RoundupTile";
import { useUserContext } from "../../context/userContext";
import AddRoundupTile from "../../components/roundups/AddRoundupTile";

export default function UsersRoundupPage() {
    const { getUser } = useUserContext();

    // check if loading when no roundups
    const { data: roundups, loading } = useGetRoundupsByUser(getUser().email)

    return (
        <div style={{ marginTop: '5em' }}>
            <Header>Your Roundups</Header>
            <Loader active={loading} ></Loader>
            {!loading &&
                <CardGroup itemsPerRow={5}>
                    {roundups && roundups.map((r, index) => <RoundupTile roundup={r} key={index} />)}
                    <AddRoundupTile />
                </CardGroup>
            }
        </div>
    )
}