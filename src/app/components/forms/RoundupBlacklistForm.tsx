import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import { Options, ParticipantForm } from "../../types/FormTypes";
import { loadStoredData, saveStoredData } from "../../utils/Session";
import { Button, Form, FormGroup, Grid, GridColumn, Message, MessageHeader } from "semantic-ui-react";
import IndividualBlacklist from "./NestedComponents/IndividualBlacklist";
import { roundupLocalStorage } from "../../enums/RoundupEnums";
import { useState } from "react";


interface RoundupBlacklistFormProps {
    back: () => void;
    next: () => void;
}

const defaultFormValues = {
    masterBlacklist: [{
        name: "blacklist",
        blacklist: [{ name: '' }]
    }]
}

export default function RoundupBlacklistForm({ back, next }: RoundupBlacklistFormProps) {
    const loadedBlacklists = loadStoredData(roundupLocalStorage.blacklists);

    const { handleSubmit, control, getValues, setValue, setError, formState: { errors } } = useForm({ defaultValues: loadedBlacklists ?? defaultFormValues });
    const { fields, remove } = useFieldArray({
        name: 'masterBlacklist',
        control
    })

    const [lengthError, setLengthError] = useState(false);

    function participantOptions(): Options[] {
        const { participants } = loadStoredData(roundupLocalStorage.participants)
        return (participants || []).map((participant: ParticipantForm) => {
            return { text: participant.name, value: participant.name };
        });
    }

    function submit(data: FieldValues) {
        if (data.masterBlacklist.some(blacklist => blacklist.blacklist.length < 2)) {
            setLengthError(true)
            return
        }

        setLengthError(false)
        saveStoredData(roundupLocalStorage.blacklists, data);
        next();
    }

    function appendBlacklist() {
        setValue("masterBlacklist", [...(getValues().masterBlacklist || []),
        {
            name: 'blacklist',
            blacklist: [{ name: '' }]
        }])
    }

    return (
        <Form onSubmit={handleSubmit(submit)}>
            {lengthError &&
                <Message negative>
                    <MessageHeader>Blacklists need to contain at least two participants</MessageHeader>
                </Message>
            }
            <Grid columns={2}>
                {fields.map((field, index) => (
                    <GridColumn key={field.id}>
                        <h2>Blacklist: {index + 1}</h2>
                        <FormGroup style={{ paddingBottom: '2rem' }}>
                            <IndividualBlacklist masterIndex={index} control={control} getValues={getValues} setValue={setValue} participantOptions={participantOptions} setError={setError} errors={errors} />
                            <Button type="button" onClick={() => remove(index)}>Delete: Blacklist {index + 1}</Button>
                        </FormGroup>
                    </GridColumn>
                ))}</Grid>
            <Button type="button" onClick={() => appendBlacklist()}>Add Blacklist</Button>
            <Button floated="right">Next</Button>
            <Button type="button" onClick={back} floated="right">Back</Button>
        </Form>
    )
}