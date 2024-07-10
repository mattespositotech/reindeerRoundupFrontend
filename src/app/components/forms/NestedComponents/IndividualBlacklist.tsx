import { Controller, useFieldArray } from "react-hook-form";
import { Button, FormGroup, FormSelect } from "semantic-ui-react";

type IndividualBlacklistProps = {
    masterIndex: number;
    control: any;
    setValue: any;
    participantOptions: any;
}
export default function IndividualBlacklist({ masterIndex, control, setValue, participantOptions }: IndividualBlacklistProps) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: `masterBlacklist.${masterIndex}.blacklist`
    })
    return (
        <div>
            {fields.map((field, index) => (
                <FormGroup key={field.id} style={{ marginLeft: '2rem', marginRight: '2rem' }}>
                    <Controller
                        name={`masterBlacklist.${masterIndex}.blacklist.${index}.email`}
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                options={participantOptions()}
                                {...field}
                                placeholder='Participant'
                                onChange={(_, data) => {
                                    if (data.value)
                                        setValue(`masterBlacklist.${masterIndex}.blacklist.${index}.email`, data.value.toString())
                                }} />
                        )}
                    />
                    <Button type="button" onClick={() => remove(index)}>Delete</Button>
                </FormGroup>
            ))}
            <Button type="button" onClick={() => append({ email: '' })}>Add Participant</Button>
        </div>
    )
}