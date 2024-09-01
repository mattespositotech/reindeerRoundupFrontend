import { Segment, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell, Container } from "semantic-ui-react"
import { Matches, ParticipantDictionary } from "../../types/RoundupTypes"
import DownloadAsCsvButton from "./DownloadAsCsvButton";

type MatchesTableProps = {
    matches?: Matches;
    display: boolean;
    participantDictionary: ParticipantDictionary;
    matchesFileName: string;
}
export default function MatchesTable({ matches, display, participantDictionary, matchesFileName }: MatchesTableProps) {
    return (
        <>
            {display &&
                matches &&
                <Segment raised>
                    <Table padded>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderCell>Giver</TableHeaderCell>
                                <TableHeaderCell>Reciever</TableHeaderCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Object.entries(matches).map(([giver, reciever]) => (
                                <TableRow key={giver}>
                                    <TableCell>{participantDictionary[giver]}</TableCell>
                                    <TableCell>{participantDictionary[reciever]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Container textAlign="right">
                        <DownloadAsCsvButton matches={matches} fileName={matchesFileName} />
                    </Container>
                </Segment>}
        </>
    )
}