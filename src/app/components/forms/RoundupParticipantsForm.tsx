import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import { Button, Form, FormGroup, FormInput, Message, MessageHeader } from "semantic-ui-react";
import { loadStoredData, saveStoredData } from "../../utils/Session";
import { roundupLocalStorage } from "../../enums/RoundupEnums";
import { ParticipantList } from "../../types/FormTypes";
import { useState } from "react";

type RoundupParticipantsFormProps = {
    back: () => void;
    next: () => void;
}

const defaultFormValues = {
    participants: [{ name: '', email: '' }]
}

export default function RoundupParticipantsForm({ back, next }: RoundupParticipantsFormProps) {
    const loadedParticipants = loadStoredData(roundupLocalStorage.participants);

    const [minError, setMinError] = useState(false);
    const { register, handleSubmit, control, formState: { errors }, getValues } = useForm<ParticipantList>({
        defaultValues: loadedParticipants ?? defaultFormValues,
        mode: 'onBlur'
    })
    const { fields, append, remove } = useFieldArray({
        name: 'participants',
        control
    })

    function deleteParticipant(index: number) {
        remove(index)
        if (fields.length <= 1) append({ name: '', email: '' })
    }

    const isDuplicate = (value: string, index: number, field: 'name' | 'email') => {
        const participants = getValues('participants');
        return participants.some(
            (participant, i) =>
                i !== index &&
                participant[field]?.toLowerCase() === value?.toLowerCase()
        );
    };

    function submit(data: FieldValues) {
        if (fields.length < 5) {
            setMinError(true)
            return
        }
        setMinError(false)
        saveStoredData(roundupLocalStorage.participants, data)
        next()
    }
    return (
        <Form onSubmit={handleSubmit(submit)}>
            {minError &&
                <Message negative>
                    <MessageHeader>Minimum five participants are needed</MessageHeader>
                </Message>
            }
            {fields.map((field, index) => (
                <FormGroup widths='equal' key={field.id}>
                    <FormInput
                        placeholder="Participant's Name"
                        {...register(`participants.${index}.name`, {
                            required: 'Name is required',
                            validate: (value) =>
                                !isDuplicate(value, index, 'name') ||
                                'This name is already in use'
                        })}
                        error={
                            errors.participants?.[index]?.name &&
                            errors.participants?.[index]?.name?.message
                        }
                    />
                    <FormInput
                        placeholder="Participant's Email"
                        {...register(`participants.${index}.email`, {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email address'
                            },
                            validate: (value) => !isDuplicate(value, index, 'email') || 'This email is already in use'
                        })}
                        error={errors.participants?.[index]?.email ? errors.participants?.[index]?.email?.message : undefined}
                    />
                    <Button type="button" onClick={() => deleteParticipant(index)}>Delete</Button>
                </FormGroup>
            ))}
            <Button type="button" onClick={() => append({ name: '', email: '' })}>Add Participant</Button>
            <Button type="submit" floated="right">Next</Button>
            <Button type="button" onClick={back} floated="right">Back</Button>
        </Form>
    )
}