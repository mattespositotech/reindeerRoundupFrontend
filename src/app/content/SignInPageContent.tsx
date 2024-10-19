import { FieldValues, useForm } from "react-hook-form";
import { Button, Form, Header, Message, MessageHeader, Segment } from "semantic-ui-react";
import { useUserContext } from "../context/userContext";
import { useState } from "react";

interface DisplayProps {
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

function SignInContent({ setDisplay }: DisplayProps) {
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({
        mode: 'onTouched'
    });
    const [error, setError] = useState(false);

    const userContext = useUserContext();

    async function signInSubmit(data: FieldValues) {
        try {
            await userContext.signInUser(data['email'], data['password'])
        } catch (error) {
            setError(true)
        }
    }

    return (
        <Segment>
            <Header as='h2'>Sign In To Your Account</Header>
            <p>Your account stores all your reindeer roundup information</p>
            {error &&
                <Message negative>
                    <MessageHeader>Invalid Email or Password</MessageHeader>
                </Message>
            }
            <Form onSubmit={handleSubmit(signInSubmit)}>
                <Form.Input
                    placeholder='Enter your Email'
                    {...register('email', { required: true })}
                    error={errors.email && 'Email is required'}
                />
                <Form.Input
                    type="password"
                    placeholder='Enter your Password'
                    {...register('password', { required: true })}
                    error={errors.password && 'Password is required'}
                />
                <Button
                    loading={isSubmitting}
                    disabled={!isValid}
                    type='submit'
                    fluid
                    primary
                    content='Submit' />
            </Form>
            <Header className="pointer" as='h4' onClick={() => setDisplay('forgot')}>Forgot your Password?</Header>
            <Header className="pointer" as='h4' onClick={() => setDisplay('create')}>Create an Account</Header>
        </Segment>
    )
}

function ForgotPasswordContent() {
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({
        mode: 'onTouched'
    });
    const [error, setError] = useState(false);
    const [sent, setSent] = useState(false);
    const userContext = useUserContext();

    async function forgotPasswordSubmit(data: FieldValues) {
        try {
            await userContext.resetUserPassword(data['email'])
            setSent(true)
        } catch {
            setError(true)
        }
    }

    return (
        <>
            {!sent ?
                <Segment>
                    <Header as='h2'>Forgot Your Password?</Header>
                    <p>Enter your email and we will send you a new temporary password</p>
                    {error &&
                        <Message negative>
                            <MessageHeader>No account for this email</MessageHeader>
                        </Message>
                    }
                    <Form onSubmit={handleSubmit(forgotPasswordSubmit)}>
                        <Form.Input
                            placeholder='Enter your Email'
                            {...register('email', { required: true })}
                            error={errors.email && 'Email is required'}
                        />
                        <Button
                            loading={isSubmitting}
                            disabled={!isValid}
                            type='submit'
                            fluid
                            primary
                            content='Submit' />
                    </Form>
                </Segment> :
                <Segment>
                    <Header as='h2'>An email has been sent to your inbox</Header>
                </Segment>}
        </>
    )
}

function CreateAccountContent() {
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, watch } = useForm({
        mode: 'onTouched'
    });
    const [error, setError] = useState(false)
    const userContext = useUserContext();

    const password = watch('password');

    async function createAccountSubmit(data: FieldValues) {
        try {
            await userContext.createUserAccount(data['email'], data['password'])
        } catch {
            setError(true)
        }
    }

    return (
        <Segment>
            <Header as='h2'>Create an account</Header>
            <p>Create an account to store all your reindeer roundup information</p>
            {error &&
                <Message negative>
                    <MessageHeader>This email address is already in use</MessageHeader>
                </Message>
            }
            <Form onSubmit={handleSubmit(createAccountSubmit)}>
                <Form.Input
                    placeholder='Enter your Email'
                    {...register('email', { required: 'Email is required' })}
                    error={errors.email && errors.email.message}
                />
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

export { SignInContent, ForgotPasswordContent, CreateAccountContent }
