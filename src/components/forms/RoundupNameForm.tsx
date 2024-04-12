import { FieldValues, useForm } from "react-hook-form";
import { Button, Form } from "semantic-ui-react";

function submit(data: FieldValues) {
    console.log(data)
}

export default function RoundupNameForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Form onSubmit={handleSubmit(submit)}>
            <Form.Input
                placeholder='List Name'
                {...register('listName', { required: true })}
                error={errors.listName && 'List name is required'}
            />
            <Button>Next</Button>
        </Form>
    )
}