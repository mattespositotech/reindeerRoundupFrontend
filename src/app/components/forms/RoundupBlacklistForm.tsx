import { Controller, FieldValues, useFieldArray, useForm } from "react-hook-form";
import { Participant } from "../../types/FormTypes";
import { loadStoredData } from "../../utils/Session";
import { Button, Form, FormGroup, FormSelect } from "semantic-ui-react";


interface RoundupBlacklistFormProps {
    back: () => void;
    next: () => void;
}

type FormValues = {
    blacklist: { email: string }[];
}

export default function RoundupBlacklistForm({ back, next }: RoundupBlacklistFormProps) {
    const { handleSubmit, control, setValue } = useForm<FormValues>();
    const { fields, append, remove } = useFieldArray({
        name: 'blacklist',
        control
    })

    function participantOptions() {
        const { participants } = loadStoredData('roundupParticipants')
        return (participants || []).map((participant: Participant) => {
            return { text: participant.name, value: participant.email };
        });
    }

    function onSubmit(data: FieldValues) {
        console.log(data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
                <FormGroup key={field.id}>
                    <Controller
                        name={`blacklist.${index}.email`}
                        control={control}
                        render={({ field }) => (
                            <FormSelect options={participantOptions()} {...field}
                                onChange={(_, data) => {
                                    if (data.value)
                                        setValue(`blacklist.${index}.email`, data.value.toString())
                                }} />
                        )}
                    />
                    <Button type="button" onClick={() => remove(index)}>Delete</Button>
                </FormGroup>
            ))}
            <Button type="button" onClick={() => append({ email: '' })}>Add Participant</Button>
            <Button type="button" onClick={back}>Back</Button>
            <Button>Next</Button>
        </Form>
    )
}