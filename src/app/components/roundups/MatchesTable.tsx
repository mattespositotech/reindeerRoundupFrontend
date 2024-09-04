import { Segment, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell, Container } from "semantic-ui-react"
import { Matches } from "../../types/RoundupTypes"
import DownloadAsCsvButton from "./DownloadAsCsvButton";

type MatchesTableProps = {
    matches?: Matches;
    matchesFileName: string;
}
export default function MatchesTable({ matches, matchesFileName }: MatchesTableProps) {
    return (
        <>
            {matches &&
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
                                    <TableCell>{giver}</TableCell>
                                    <TableCell>{reciever}</TableCell>
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