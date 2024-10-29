import { FieldValues, useForm } from "react-hook-form";
import { Button, Form, FormInput } from "semantic-ui-react";
import { loadStoredData, saveStoredData } from "../../utils/Session";
import { roundupLocalStorage } from "../../enums/RoundupEnums";

interface RoundupNameFormProps {
    next: () => void;
}

export default function RoundupNameForm({ next }: RoundupNameFormProps) {
    const loadedName = loadStoredData(roundupLocalStorage.name);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: loadedName,
        mode: 'onTouched'
    });

    function submit(data: FieldValues) {
        saveStoredData(roundupLocalStorage.name, data)
        next()
    }

    return (
        <Form onSubmit={handleSubmit(submit)}>
            <FormInput
                placeholder='List Name'
                {...register(roundupLocalStorage.name, { required: true, minLength: 4 })}
                error={errors.name ?
                    (errors.name.type === 'required' && 'List name is required'
                        || errors.name.type === 'minLength' && 'List name must be longer than three characters'
                    ) : null}
            />
            <Button floated="right">Next</Button>
        </Form>
    )
}