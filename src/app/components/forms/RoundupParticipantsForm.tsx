import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import { Participant } from "../../types/FormTypes";
import { Button, Form, FormGroup, FormInput } from "semantic-ui-react";
import { loadStoredData, saveStoredData } from "../../utils/Session";

type RoundupParticipantsFormProps = {
    back: () => void;
    next: () => void;
}

const defaultValues = {
    participants: [{ name: '', email: '' }]
}
export default function RoundupParticipantsForm({ back, next }: RoundupParticipantsFormProps) {
    const loadedParticipants = loadStoredData('roundupParticipants') || defaultValues;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: loadedParticipants
    })
    const { fields, append, remove } = useFieldArray({
        name: 'participants',
        control
    })

    function onSubmit(data: FieldValues) {
        saveStoredData('roundupParticipants', data)
        next()
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
                <FormGroup widths='equal' key={field.id}>
                    <FormInput placeholder="Participant's Name" {...register(`participants.${index}.name`)} />
                    <FormInput placeholder="Participant's Email" {...register(`participants.${index}.email`)} />
                    <Button type="button" onClick={() => remove(index)}>Delete</Button>
                </FormGroup>
            ))}
            <Button type="button" onClick={() => append({ name: '', email: ''})}>Add Participant</Button>
            <Button type="button" onClick={back}>Back</Button>
            <Button type="submit">Next</Button>
        </Form>
    )
}