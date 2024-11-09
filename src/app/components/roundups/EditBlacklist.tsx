
import { useState } from "react";
import { Popup, Button, Modal, ModalHeader, ModalContent, ModalActions, Form, FormGroup, FormSelect, Grid, Message, MessageHeader } from "semantic-ui-react";
import { Roundup } from "../../types/RoundupTypes";
import { useForm, useFieldArray, FieldValues, Controller } from "react-hook-form";
import { useEditBlacklist } from "../../data/roundup";
import { useNavigate } from "react-router-dom";
import { Options } from "../../types/FormTypes";

type EditBlacklistProps = {
    roundup: Roundup;
    blacklistIndex: number;
}
export default function EditBlacklist({ roundup, blacklistIndex }: EditBlacklistProps) {
    const [modalOpen, setModalOpen] = useState(false)
    const [lengthError, setLengthError] = useState(false)
    const navigate = useNavigate();

    const editBlacklist = useEditBlacklist();

    const initialValues = roundup.blacklists[blacklistIndex].blacklist.map((value: string) => ({ name: value }));


    const { handleSubmit, reset, control, setValue, getValues, setError, formState: { errors } } = useForm({
        defaultValues: { blacklist: initialValues },
        mode: 'onBlur'
    })

    const { fields, append, remove } = useFieldArray({
        name: 'blacklist',
        control
    })

    function handleClose() {
        setModalOpen(false)
        setLengthError(false)
        reset()
    }

    const participantOptions: Options[] = roundup.participants.map((participant) => {
        return { text: participant.name, value: participant.name }
    });

    function handleChange(value: string, index: number) {
        const blacklist: { name: string }[] = getValues('blacklist')
        const invalid = blacklist.some((participant, i) => i !== index && participant.name.toLowerCase() === value.toLowerCase())

        if (invalid) {
            setError(`blacklist.${index}.name`, {
                type: 'manual', message: 'That name has already been used'
            })
        } else {
            setError(`blacklist.${index}.name`, {})
            setValue(`blacklist.${index}.name`, value)
        }
    }

    async function submit(data: FieldValues) {
        if (data.blacklist.length < 2) {
            setLengthError(true)
            return
        }

        console.log(data)

        const edit = {
            id: roundup._id,
            blacklist: {
                uuid: roundup.blacklists[blacklistIndex].uuid,
                blacklist: data.blacklist.map((item: { name: string }) => item.name)
            }
        }

        console.log(edit)

        setLengthError(false)
        await editBlacklist.mutate(edit)
        navigate(0)
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
                    <Form onSubmit={handleSubmit(submit)} id='editBlacklist'>
                        {lengthError &&
                            <Message negative>
                                <MessageHeader>Blacklists need to contain at least two participants</MessageHeader>
                            </Message>
                        }
                        <Grid columns={3} style={{ marginTop: '0rem' }}>
                            {fields.map((field, index) => (
                                <FormGroup key={field.id}>
                                    <Controller
                                        name={`blacklist.${index}.name`}
                                        control={control}
                                        render={({ field }) => (
                                            <FormSelect
                                                options={participantOptions}
                                                {...field}
                                                placeholder="Participant"
                                                onChange={(_, data) => {
                                                    if (data.value) {
                                                        handleChange(data.value.toString(), index)
                                                    }
                                                }}
                                                error={errors.blacklist?.[index]?.name && errors.blacklist?.[index]?.name.message}
                                            />
                                        )}
                                    />
                                    <Button type="button" onClick={() => remove(index)}>Delete</Button>
                                </FormGroup>
                            ))}
                        </Grid>
                        <Button type="button" onClick={() => append({ name: '' })} style={{ marginTop: '1rem' }}>Add Particpant</Button>
                    </Form>
                </ModalContent>
                <ModalActions>
                    <Button onClick={handleClose} negative>Cancel</Button>
                    <Button content='Update' positive submit="true" form='editBlacklist' loading={editBlacklist.loading} />
                </ModalActions>
            </Modal>
        </>
    )
}