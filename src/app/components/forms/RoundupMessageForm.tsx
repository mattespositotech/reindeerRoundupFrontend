import { FieldValues, useForm } from "react-hook-form";
import { loadStoredData, saveStoredData } from "../../utils/Session";
import { Button, Form, FormTextArea } from "semantic-ui-react";

type RoundupMessageFormProps = {
  back: () => void;
}
export default function RoundupMessageForm({ back }: RoundupMessageFormProps) {
  const loadedMessage = loadStoredData('roundupMessage');

  const { register, handleSubmit } = useForm({ defaultValues: loadedMessage });

  function submit(data: FieldValues) {
    saveStoredData('roundupMessage', data)
  }
  return (
    <Form onSubmit={handleSubmit(submit)}>
      <FormTextArea
        placeholder='Add your message here'
        {...register('roundupMessage')}
      />
      <Button type="button" onClick={back}>Previous</Button>
      <Button>Next</Button>
    </Form>
  )
}
