import { useState } from "react"
import { Popup, Button, Modal, ModalHeader, ModalContent, ModalActions } from "semantic-ui-react"
import { useDeleteBlacklist } from "../../data/roundup";
import { useNavigate } from "react-router-dom";

type DeleteBlacklistProps = {
    roundupId: string;
    blacklistId: string;
}
export default function DeleteBlacklist({roundupId, blacklistId}: DeleteBlacklistProps) {
    const [modalOpen, setModalOpen] = useState(false)

    const deleteBlacklist = useDeleteBlacklist()
    const navigate = useNavigate();

    async function removeBlacklist() {
        await deleteBlacklist.deleteBlacklist(roundupId, blacklistId)
        setModalOpen(false)
        navigate(0)
    }
    return (
        <>
            <Popup content='Remove Blacklist'
                trigger={<Button icon='trash' color='red' onClick={() => setModalOpen(true)} floated="right" />} />
            <Modal
                onClose={() => setModalOpen(false)}
                onOpen={() => setModalOpen(true)}
                open={modalOpen}
                size="mini"
            >
                <ModalHeader>Remove Participant</ModalHeader>
                <ModalContent>Are you sure you want to remove this blacklist?</ModalContent>
                <ModalActions>
                    <Button onClick={() => setModalOpen(false)} negative>Cancel</Button>
                    <Button content='Remove' positive onClick={removeBlacklist} loading={deleteBlacklist.loading} />
                </ModalActions>
            </Modal>
        </>
    )
}