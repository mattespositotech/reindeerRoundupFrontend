
import { useState } from "react";
import { Popup, Button, Modal, ModalHeader, ModalContent, ModalActions } from "semantic-ui-react";

// type Props = {}
export default function EditBlacklist() {
    const [modalOpen, setModalOpen] = useState(false)

    function handleClose() {
        setModalOpen(false)
    }

    return (
        <>
            <Popup content='Edit Blacklist'
                trigger={<Button icon='edit' color='teal' onClick={() => setModalOpen(true)} floated="right" />} />
            <Modal onClose={handleClose}
                onOpen={() => setModalOpen(true)}
                open={modalOpen}
                >
                <ModalHeader>Edit Blacklist</ModalHeader>
                <ModalContent>
                    {/* <Form onSubmit={handleSubmit(submit)} id='updateEmail'>
                        <FormInput
                            placeholder={oldEmail}
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Invalid email address'
                                },
                                validate: (value) => !isDuplicate(value, 'email') ||
                                    'This email is already in use'
                            })}
                            error={errors.email?.message}
                        />
                    </Form> */}
                </ModalContent>
                <ModalActions>
                    <Button onClick={handleClose} negative>Cancel</Button>
                    <Button content='Add' positive submit="true" form='updateEmail' loading={false} />
                </ModalActions>
            </Modal>
        </>
    )
}