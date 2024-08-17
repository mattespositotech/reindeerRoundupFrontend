import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import { ParticipantForm } from "../../types/FormTypes";
import { loadStoredData, saveStoredData } from "../../utils/Session";
import { Button, Form, FormGroup } from "semantic-ui-react";
import IndividualBlacklist from "./NestedComponents/IndividualBlacklist";
import { roundupLocalStorage } from "../../enums/RoundupEnums";


interface RoundupBlacklistFormProps {
    back: () => void;
    next: () => void;
}

const defaultValues = {
    masterBlacklist: [
        {
            name: 'blacklist',
            blacklist: [{ email: '' }]
        }
    ]
}

export default function RoundupBlacklistForm({ back, next }: RoundupBlacklistFormProps) {
    const loadedBlacklists = loadStoredData(roundupLocalStorage.blacklists) || defaultValues;
    const { handleSubmit, control, getValues, setValue } = useForm({ defaultValues: loadedBlacklists });
    const { fields, remove } = useFieldArray({
        name: 'masterBlacklist',
        control
    })

    function participantOptions() {
        const { participants } = loadStoredData(roundupLocalStorage.participants)
        return (participants || []).map((participant: ParticipantForm) => {
            return { text: participant.name, value: participant.email };
        });
    }

    function submit(data: FieldValues) {
        saveStoredData(roundupLocalStorage.blacklists, data);
        next();
    }

    function appendBlacklist() {
        setValue("masterBlacklist", [...(getValues().masterBlacklist || []),
        {
            name: 'blacklist',
            blacklist: [{ email: '' }]
        }
        ])
    }

    return (
        <Form onSubmit={handleSubmit(submit)}>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <h2>Blacklist: {index + 1}</h2>
                    <FormGroup style={{ paddingBottom: '2rem' }}>
                        <IndividualBlacklist masterIndex={index} control={control} setValue={setValue} participantOptions={participantOptions} />
                        <Button type="button" onClick={() => remove(index)}>Delete: Blacklist {index + 1}</Button>
                    </FormGroup>
                </div>
            ))}
            <Button type="button" onClick={() => appendBlacklist()}>Add Blacklist</Button>
            <Button type="button" onClick={back}>Back</Button>
            <Button>Next</Button>
        </Form>
    )
}