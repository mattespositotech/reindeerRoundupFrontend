import { FieldValues, useForm } from "react-hook-form";
import { loadStoredData, saveStoredData } from "../../utils/Session";
import { Button, Form, FormTextArea } from "semantic-ui-react";
import { roundupLocalStorage } from "../../enums/RoundupEnums";
import { submitRoundup } from "../../data/actions/submitRoundup";
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
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({ defaultValues: loadedMessage });

  async function submit(data: FieldValues) {
    setLoading(true)
    saveStoredData(roundupLocalStorage.message, data)
    await submitRoundup(getUser().email)
    setLoading(false)
    navigate('/roundup/user');
  }
  return (
    <Form onSubmit={handleSubmit(submit)}>
      <FormTextArea
        placeholder='Add your message here'
        {...register(roundupLocalStorage.message)}
      />
      <Button type="button" onClick={back}>Previous</Button>
      <Button loading={loading}>Submit</Button>
    </Form>
  )
}
