import { useState } from "react"
import { useForm } from "react-hook-form"
import { Popup, Button, Modal, ModalHeader, ModalContent, Form, FormInput, ModalActions } from "semantic-ui-react"
import { useUpdateEmail } from "../../data/roundup";
import { useNavigate } from "react-router-dom";

type ChangeEmailProps = {
    id: string;
    partId: string;
    oldEmail: string;
    isDuplicate: (value: string, field: 'name' | 'email') => boolean;
}
export default function ChangeEmail({ id, partId, oldEmail, isDuplicate }: ChangeEmailProps) {
    const [modalOpen, setModalOpen] = useState(false)
    const updateEmail = useUpdateEmail();
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<{ email: string }>({ mode: 'onBlur' })

    function handleClose() {
        setModalOpen(false)
        reset()
    }

    async function submit(data: { email: string }) {
        await updateEmail.mutate({ id, part_id: partId, email: data.email })
        setModalOpen(false)
        navigate(0)
    }

    return (
        <>
            <Popup content='Change Email'
                trigger={<Button icon='edit' color='teal' onClick={() => setModalOpen(true)} />} />
            <Modal onClose={handleClose}
                onOpen={() => setModalOpen(true)}
                open={modalOpen}
                size="tiny">
                <ModalHeader>Change Email</ModalHeader>
                <ModalContent>
                    <Form onSubmit={handleSubmit(submit)} id='updateEmail'>
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
                    </Form>
                </ModalContent>
                <ModalActions>
                    <Button onClick={handleClose} negative>Cancel</Button>
                    <Button content='Add' positive submit="true" form='updateEmail' loading={updateEmail.loading} />
                </ModalActions>
            </Modal>
        </>
    )
}