import { Card, CardContent, CardDescription, CardHeader, SemanticCOLORS } from "semantic-ui-react"
import { RoundupMinimal } from "../../types/RoundupTypes"
import { Link } from "react-router-dom"

type RoundupTileProps = {
    roundup: RoundupMinimal
}
export default function RoundupTile({ roundup }: RoundupTileProps) {
    // move this if using again and map into map not list for readablity    
    function colorToStatus(): SemanticCOLORS | undefined {
        const colors: SemanticCOLORS[] = ['red', 'green', 'blue']
        return colors[roundup.status]
    }
    return (
        <Card color={colorToStatus()} as={Link} to={`/roundup/${roundup._id}`}>
            <CardContent textAlign="center">
                <CardHeader>{roundup.name}</CardHeader>
                <CardDescription>{roundup.date}</CardDescription>
            </CardContent>
        </Card>
    )
}