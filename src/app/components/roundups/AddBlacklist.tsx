import { useState } from "react";
import { Button, Card, CardContent, CardHeader, Form, FormGroup, FormSelect, Grid, GridColumn, Icon, Message, MessageHeader, Modal, ModalActions, ModalContent, ModalHeader } from "semantic-ui-react";
import { Options } from "../../types/FormTypes";
import { Roundup } from "../../types/RoundupTypes";
import { Controller, FieldValues, useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddBlacklist } from "../../data/roundup";

type AddBlacklistProps = {
    roundup: Roundup;
}
export default function AddBlacklist({ roundup }: AddBlacklistProps) {
    const [modalOpen, setModalOpen] = useState(false)
    const [lengthError, setLengthError] = useState(false)
    const navigate = useNavigate();

    const addBlacklist = useAddBlacklist();

    const { handleSubmit, reset, control, setValue, getValues, setError, formState: { errors } } = useForm({
        defaultValues: { blacklist: [{ name: '' }] },
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

        const add = {
            id: roundup._id,
            blacklist: data.blacklist.map((item: { name: string }) => item.name)
        }

        setLengthError(false)
        await addBlacklist.mutate(add)
        navigate(0)
    }

    return (
        <GridColumn>
            <Card raised onClick={() => setModalOpen(true)}>
                <CardContent textAlign="center">
                    <CardHeader as='h4'>Add Another Blacklist</CardHeader>
                    <Icon name='plus circle' size='big' color="grey" />
                </CardContent>
            </Card>
            <Modal
                onClose={handleClose}
                onOpen={() => setModalOpen(true)}
                open={modalOpen}>
                <ModalHeader>Add Another Blacklist</ModalHeader>
                <ModalContent>
                    <Form onSubmit={handleSubmit(submit)} id='addBlacklist'>
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
                                                error={errors.blacklist?.[index]?.name && errors.blacklist?.[index]?.name?.message}
                                            />
                                        )}
                                    />
                                    <Button type="button" onClick={() => remove(index)}>Delete</Button>
                                </FormGroup>
                            ))}
                        </Grid>
                        <Button type="button" onClick={() => append({ name: '' })} style={{ marginTop: '1rem'}}>Add Particpant</Button>
                    </Form>
                </ModalContent>
                <ModalActions>
                    <Button onClick={handleClose} negative>Cancel</Button>
                    <Button content='Add' positive submit="true" form='addBlacklist' loading={addBlacklist.loading} />
                </ModalActions>
            </Modal>
        </GridColumn>
    )
}