import { FieldValues, useForm } from "react-hook-form";
import { Button, Form, Header, Message, MessageHeader, Segment } from "semantic-ui-react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function forgotPasswordSubmit(data: FieldValues) {
    console.log(data)
}

function createAccountSubmit(data: FieldValues) {
    console.log(data)
}

interface DisplayProps {
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

function SignInContent({ setDisplay }: DisplayProps) {
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({
        mode: 'onTouched'
    });
    const [error, setError] = useState(false);

    const userContext = useUserContext();
    const navigate = useNavigate();

    async function signInSubmit(data: FieldValues) {
        try {
            await userContext.signInUser(data['email'], data['password'])
            navigate('/')
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

    return (
        <Segment>
            <Header as='h2'>Forgot Your Password?</Header>
            <p>Enter your email and we will send you a new temporary password</p>
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
        </Segment>
    )
}

function CreateAccountContent() {
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({
        mode: 'onTouched'
    });

    return (
        <Segment>
            <Header as='h2'>Create an account</Header>
            <p>Create an account to store all your reindeer roundup information</p>
            <Form onSubmit={handleSubmit(createAccountSubmit)}>
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
                <Form.Input
                    type="password"
                    placeholder='Confirm your Password'
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
        </Segment>
    )
}

export { SignInContent, ForgotPasswordContent, CreateAccountContent }
