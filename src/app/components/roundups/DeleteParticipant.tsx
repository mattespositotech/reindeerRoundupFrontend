import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalActions, ModalContent, ModalHeader, Popup } from "semantic-ui-react"
import { useDeleteParticipant } from "../../data/roundup";

type DeleteParticipantProps = {
    name: string;
    roundupId: string;
    partId: string;
}
export default function DeleteParticipant({ name, roundupId, partId }: DeleteParticipantProps) {
    const [modalOpen, setModalOpen] = useState(false)
    const navigate = useNavigate();
    const deleteParticipant = useDeleteParticipant();

    async function removeParticipant() {
        await deleteParticipant.deleteParticipant(roundupId, partId)
        setModalOpen(false)
        navigate(0)
    }
    return (
        <>
            <Popup content='Remove Participant'
                trigger={<Button icon='trash' color='red' onClick={() => setModalOpen(true)} />} />
            <Modal
                onClose={() => setModalOpen(false)}
                onOpen={() => setModalOpen(true)}
                open={modalOpen}
                size="mini"
            >
                <ModalHeader>Remove Participant</ModalHeader>
                <ModalContent>Are you sure you want to remove {name}?</ModalContent>
                <ModalActions>
                    <Button onClick={() => setModalOpen(false)} negative>Cancel</Button>
                    <Button content='Remove' positive onClick={removeParticipant} loading={deleteParticipant.loading} />
                </ModalActions>
            </Modal>
        </>
    )
}