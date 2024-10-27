import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, Icon } from "semantic-ui-react";

export default function AddRoundupTile() {
    return (
        <Card color='green' as={Link} to='/roundup'>
            <CardContent textAlign="center">
                <CardHeader>Add a new roundup</CardHeader>
                <CardDescription><Icon name='plus circle' /></CardDescription>
            </CardContent>
        </Card>
    )
}