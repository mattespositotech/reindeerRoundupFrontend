import { FieldValues, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, Header, Message, MessageHeader, Segment } from "semantic-ui-react";
import { useUserContext } from "../../context/userContext";
import { useState } from "react";

export default function ResetPage() {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, watch } = useForm({
        mode: 'onTouched'
    });
    const [error, setError] = useState(false);

    const password = watch('password');

    const userContext = useUserContext();
    const navigate = useNavigate();

    async function resetPassword(data: FieldValues) {
        if (!id) {
            navigate('/')
        } else {
            try {
                await userContext.updateUserPassword(id, data['password'])
            } catch {
                setError(true)
            }
        }
    }

    return (
        <Segment style={{ marginTop: '5em' }} textAlign="center">
            <Header as='h2'>Reset Your Password</Header>
            {error &&
                <Message negative>
                    <MessageHeader>Something went wrong contact support</MessageHeader>
                </Message>
            }
            <Form onSubmit={handleSubmit(resetPassword)}>
                <Form.Input
                    type="password"
                    placeholder='Enter your Password'
                    {...register('password', { required: 'Password is required' })}
                    error={errors.password && errors.password.message}
                />
                <Form.Input
                    type="password"
                    placeholder='Confirm your Password'
                    {...register('confirmPassword', {
                        required: 'Confirm Password is required',
                        validate: value => value === password || 'Passwords do not match'
                    })}
                    error={errors.confirmPassword && errors.confirmPassword.message}
                />
                <Button
                    loading={isSubmitting}
                    disabled={!isValid}
                    type='submit'
                    fluid
                    primary
                    content='Submit' />
            </Form>
        </Segment>
    )
}