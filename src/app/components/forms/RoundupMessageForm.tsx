import { FieldValues, useForm } from "react-hook-form";
import { loadStoredData, saveStoredData } from "../../utils/Session";
import { Button, Form, FormTextArea } from "semantic-ui-react";
import { roundupLocalStorage } from "../../enums/RoundupEnums";
import { submitRoundup } from "../../data/actions/submitRoundup";
import { useGetUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

type RoundupMessageFormProps = {
  back: () => void;
}
export default function RoundupMessageForm({ back }: RoundupMessageFormProps) {
  const loadedMessage = loadStoredData(roundupLocalStorage.message);
  const user = useGetUser();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({ defaultValues: loadedMessage });

  async function submit(data: FieldValues) {
    saveStoredData(roundupLocalStorage.message, data)
    await submitRoundup(user.email)
    navigate('/roundup/user');
  }
  return (
    <Form onSubmit={handleSubmit(submit)}>
      <FormTextArea
        placeholder='Add your message here'
        {...register(roundupLocalStorage.message)}
      />
      <Button type="button" onClick={back}>Previous</Button>
      <Button>Submit</Button>
    </Form>
  )
}
