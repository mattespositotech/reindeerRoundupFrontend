import { FieldValues, useForm } from "react-hook-form";
import { Button, Form } from "semantic-ui-react";
import { loadStoredData, saveStoredData } from "../../utils/Session";

interface RoundupNameFormProps {
    next: () => void;
}

export default function RoundupNameForm({next}: RoundupNameFormProps) {
    const loadedName = loadStoredData('roundupName');
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: loadedName
    });

    function submit(data: FieldValues) {
        saveStoredData('roundupName', data)
        next()
    }

    return (
        <Form onSubmit={handleSubmit(submit)}>
            <Form.Input
                placeholder='List Name'
                {...register('roundupName', { required: true })}
                error={errors.listName && 'List name is required'}
            />
            <Button>Next</Button>
        </Form>
    )
}