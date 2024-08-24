import { useParams } from "react-router-dom";

export default function DeclinePage() {
    const { id, email } = useParams();
    return (
      <div style={{ marginTop: '5em' }}>
          <h2 color="red">Decline Page</h2>
          <p>{id}</p>
          <p>{email}</p>
      </div>
    )
  }