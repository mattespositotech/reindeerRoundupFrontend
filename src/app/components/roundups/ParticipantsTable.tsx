import { Label, Segment, SemanticCOLORS, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react"
import { Participant } from "../../types/RoundupTypes"
import { status } from "../../enums/UserEnums"

type ParticipantsTableProps = {
  participants: Participant[]
}
export default function ParticipantsTable({ participants }: ParticipantsTableProps) {
  const statusMapping: { [key in status]: { color: SemanticCOLORS, label: string, rowProps: object } } = {
    [status.accepted]: { color: 'green', label: 'Accepted', rowProps: { positive: true } },
    [status.declined]: { color: 'red', label: 'Declined', rowProps: { negative: true } },
    [status.pending]: { color: 'grey', label: 'Pending', rowProps: {} }
  };
  
  function colorRow(partStatus: status) {
    return statusMapping[partStatus]?.rowProps || {};
  }
  
  function colorLabel(partStatus: status) {
    return statusMapping[partStatus]?.color || 'grey';
  }
  
  function labelText(partStatus: status) {
    return statusMapping[partStatus]?.label || 'Unknown';
  }

  return (
    <Segment raised>
      <Table padded>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {participants.map(part =>
            <TableRow key={part.email} {...colorRow(part.status)}>
              <TableCell>{part.name}</TableCell>
              <TableCell>{part.email}</TableCell>
              <TableCell><Label color={colorLabel(part.status)}>{labelText(part.status)}</Label></TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Segment>
  )
}