import { FieldValues, useForm } from "react-hook-form";
import { loadStoredData, saveStoredData } from "../../utils/Session";
import { Button, Form, FormTextArea } from "semantic-ui-react";
import { roundupLocalStorage } from "../../enums/RoundupEnums";
import { useSubmitRoundup } from "../../data/actions/submitRoundup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../context/userContext";

type RoundupMessageFormProps = {
  back: () => void;
}
export default function RoundupMessageForm({ back }: RoundupMessageFormProps) {
  const [loading, setLoading] = useState(false);
  const loadedMessage = loadStoredData(roundupLocalStorage.message);
  const { getUser } = useUserContext();
  const { submitRoundup } = useSubmitRoundup(getUser().email)
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: loadedMessage });

  async function submit(data: FieldValues) {
    setLoading(true)
    saveStoredData(roundupLocalStorage.message, data)
    await submitRoundup()
    setLoading(false)
    navigate('/roundup/user');
  }
  return (
    <Form onSubmit={handleSubmit(submit)}>
      <FormTextArea
        placeholder='(Optional): Add your message here'
        {...register(roundupLocalStorage.message, { maxLength: 500 })}
        error={errors.message && 'The max length is 500 characters'}
      />
      <Button loading={loading} floated="right">Submit</Button>
      <Button type="button" onClick={back} floated="right">Back</Button>
    </Form>
  )
}
