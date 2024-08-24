import { useParams } from "react-router-dom";

export default function AcceptPage() {
    const { id, email } = useParams();
    return (
        <div style={{ marginTop: '5em' }}>
            <h2 color="green">Accept Page</h2>
            <p>{id}</p>
            <p>{email}</p>
        </div>
    )
}