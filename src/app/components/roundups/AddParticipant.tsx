import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button, Form, FormInput, Modal, ModalActions, ModalContent, ModalHeader } from "semantic-ui-react"
import { useAddParticipant } from "../../data/roundup"
import { Roundup } from "../../types/RoundupTypes"
import { ParticipantForm } from "../../types/FormTypes"
import { useNavigate } from "react-router-dom"

type AddParticipantProps = {
    roundup: Roundup
}
export default function AddParticipant({ roundup }: AddParticipantProps) {
    const [modalOpen, setModalOpen] = useState(false)
    const addParticipant = useAddParticipant();
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ParticipantForm>({ mode: 'onBlur' })

    async function submit(participant: ParticipantForm) {
        await addParticipant.mutate({
            id: roundup._id,
            participant
        })
        navigate(0)
    }

    function handleClose() {
        setModalOpen(false)
        reset()
    }

    function isDuplicate(value: string, field: 'name' | 'email') {
        return roundup.participants.some(
            (participant) =>
                participant[field]?.toLowerCase() === value?.toLowerCase()
        );
    }

    return (
        <Modal onClose={handleClose}
            onOpen={() => setModalOpen(true)}
            open={modalOpen}
            trigger={<Button>Add Another Participant</Button>}
            size="tiny">
            <ModalHeader>Add Another Participant</ModalHeader>
            <ModalContent>
                <Form onSubmit={handleSubmit(submit)} id='addParticipant'>
                    <FormInput
                        placeholder="Participant's Name"
                        {...register('name', {
                            required: 'Name is required',
                            validate: (value) =>
                                !isDuplicate(value, 'name') ||
                                'This name is already in use'
                        })}
                        error={errors.name?.message}
                    />
                    <FormInput
                        placeholder="Participant's Email"
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
                <Button content='Add' positive submit="true" form='addParticipant'
                    loading={addParticipant.loading} />
            </ModalActions>
        </Modal>
    )
}