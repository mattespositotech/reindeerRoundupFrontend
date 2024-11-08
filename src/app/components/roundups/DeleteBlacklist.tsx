import { useState } from "react"
import { Popup, Button, Modal, ModalHeader, ModalContent, ModalActions } from "semantic-ui-react"

//type Props = {}
export default function DeleteBlacklist() {
    const [modalOpen, setModalOpen] = useState(false)

    function removeBlacklist() {
        console.log()
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
                    <Button content='Remove' positive onClick={removeBlacklist} loading={false} />
                </ModalActions>
            </Modal>
        </>
    )
}