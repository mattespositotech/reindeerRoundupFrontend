import { FieldValues, useForm } from "react-hook-form";
import { Button, Form, FormInput } from "semantic-ui-react";
import { loadStoredData, saveStoredData } from "../../utils/Session";

type RoundupDateFormProps = {
    back: () => void;
    next: () => void;
}
export default function RoundupDateForm({ back, next }: RoundupDateFormProps) {
    const loadedDate = loadStoredData('roundupDate');

    const { register, handleSubmit } = useForm({defaultValues: loadedDate});

    function submit(data: FieldValues) {
        saveStoredData('roundupDate', data)
        next()
    }
    return (
        <Form onSubmit={handleSubmit(submit)}>
            <FormInput
                type='date'
                {...register('roundupDate')}
            />
            <Button type="button" onClick={back}>Previous</Button>
            <Button>Next</Button>
        </Form>
    )
}