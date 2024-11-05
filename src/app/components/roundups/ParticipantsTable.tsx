import { Button, Label, Popup, Segment, SemanticCOLORS, Table, TableBody, TableCell, TableFooter, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react"
import { Roundup } from "../../types/RoundupTypes"
import { status } from "../../enums/UserEnums"
import { status as roundupStatus } from "../../enums/RoundupEnums"
import AddParticipant from "./AddParticipant"
import ResendInvite from "./ResendInvite"

type ParticipantsTableProps = {
  roundup: Roundup
}
export default function ParticipantsTable({ roundup }: ParticipantsTableProps) {
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
            <TableHeaderCell width={3}>Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {roundup?.participants.map(part =>
            <TableRow key={part.email} {...colorRow(part.status)}>
              <TableCell>{part.name}</TableCell>
              <TableCell>{part.email}</TableCell>
              <TableCell>
                <Label color={colorLabel(part.status)}>{labelText(part.status)}</Label>
              </TableCell>
              <TableCell>
                {roundup.status !== roundupStatus.complete &&
                  <>
                    <ResendInvite id={roundup._id} email={part.email} />
                    <Popup content='Change Email'
                      trigger={<Button icon='edit' color='teal' />} />
                    <Popup content='Delete Participant'
                      trigger={<Button icon='trash' color='red' />} />
                  </>}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter fullWidth>
          <TableRow>
            <TableHeaderCell>
              {roundup.status !== roundupStatus.complete &&
                <AddParticipant roundup={roundup} />}
            </TableHeaderCell>
            <TableHeaderCell />
            <TableHeaderCell />
            <TableHeaderCell />
          </TableRow>
        </TableFooter>
      </Table>
    </Segment>
  )
}