import { Card, CardContent, CardDescription, CardHeader } from "semantic-ui-react"
import { RoundupMinimal } from "../../types/RoundupTypes"
import { Link } from "react-router-dom"
import { colorToStatus } from "../../utils/Colors"

type RoundupTileProps = {
    roundup: RoundupMinimal
}
export default function RoundupTile({ roundup }: RoundupTileProps) {
    return (
        <Card color={colorToStatus(roundup.status)} as={Link} to={`/roundup/${roundup._id}`}>
            <CardContent textAlign="center">
                <CardHeader>{roundup.name}</CardHeader>
                <CardDescription>{roundup.date}</CardDescription>
            </CardContent>
        </Card>
    )
}