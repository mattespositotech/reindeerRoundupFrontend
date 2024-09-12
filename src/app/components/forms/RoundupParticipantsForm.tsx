import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import { Button, Form, FormGroup, FormInput } from "semantic-ui-react";
import { loadStoredData, saveStoredData } from "../../utils/Session";
import { roundupLocalStorage } from "../../enums/RoundupEnums";

type RoundupParticipantsFormProps = {
    back: () => void;
    next: () => void;
}

export default function RoundupParticipantsForm({ back, next }: RoundupParticipantsFormProps) {
    const loadedParticipants = loadStoredData(roundupLocalStorage.participants);

    const { register, handleSubmit, control } = useForm({
        defaultValues: loadedParticipants
    })
    const { fields, append, remove } = useFieldArray({
        name: 'participants',
        control
    })

    function submit(data: FieldValues) {
        saveStoredData(roundupLocalStorage.participants, data)
        next()
    }
    return (
        <Form onSubmit={handleSubmit(submit)}>
            {fields.map((field, index) => (
                <FormGroup widths='equal' key={field.id}>
                    <FormInput placeholder="Participant's Name" {...register(`participants.${index}.name`)} />
                    <FormInput placeholder="Participant's Email" {...register(`participants.${index}.email`)} />
                    <Button type="button" onClick={() => remove(index)}>Delete</Button>
                </FormGroup>
            ))}
            <Button type="button" onClick={() => append({ name: '', email: '' })}>Add Participant</Button>
            <Button type="button" onClick={back}>Back</Button>
            <Button type="submit">Next</Button>
        </Form>
    )
}