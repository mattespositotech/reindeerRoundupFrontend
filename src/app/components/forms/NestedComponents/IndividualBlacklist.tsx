import { Controller, useFieldArray } from "react-hook-form";
import { Button, FormGroup, FormSelect } from "semantic-ui-react";

type IndividualBlacklistProps = {
    masterIndex: number;
    control: any;
    getValues: any;
    setValue: any;
    participantOptions: any;
    setError: any;
    errors: any;
}
export default function IndividualBlacklist({ masterIndex, control, getValues, setValue, participantOptions, setError, errors }: IndividualBlacklistProps) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: `masterBlacklist.${masterIndex}.blacklist`
    })

    function  handleChange (value: string, index: number) {
        const blacklist: { name: string }[] = getValues(`masterBlacklist.${masterIndex}.blacklist`)
        const invalid = blacklist.some(
            (participant, i) => i !== index && participant.name.toLowerCase() === value.toLowerCase()
        )
        if (invalid) {
            setError(`masterBlacklist.${masterIndex}.blacklist.${index}.name`, {
                type: 'manual', message: 'That name has already been used'
            })
            console.log(errors)
        } else {
            setError(`masterBlacklist.${masterIndex}.blacklist.${index}.name`, {})
            setValue(`masterBlacklist.${masterIndex}.blacklist.${index}.name`, value)
        }
    }
    return (
        <div>
            {fields.map((field, index) => (
                <FormGroup key={field.id} style={{ marginLeft: '2rem', marginRight: '2rem' }}>
                    <Controller
                        name={`masterBlacklist.${masterIndex}.blacklist.${index}.name`}
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                options={participantOptions()}
                                {...field}
                                placeholder='Participant'
                                onChange={(_, data) => {
                                    if (data.value) {
                                        handleChange(data.value.toString(), index)
                                    }
                                }}
                                error={errors.masterBlacklist?.[masterIndex]?.blacklist?.[index]?.name ? errors.masterBlacklist?.[masterIndex]?.blacklist?.[index]?.name.message : undefined}
                            />
                        )}
                    />
                    <Button type="button" onClick={() => remove(index)}>Delete</Button>
                </FormGroup>
            ))}
            <Button type="button" onClick={() => append({ name: '' })}>Add Participant</Button>
        </div>
    )
}