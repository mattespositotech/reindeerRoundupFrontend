import { v4 as uuid } from 'uuid';
import { useState } from "react";
import Stepper from "../../../components/Stepper";
import { Button, Form, FormGroup, FormInput, FormSelect, Grid, GridColumn, Header, List, ListItem } from "semantic-ui-react";
import { Controller, FieldValues, useForm } from 'react-hook-form';

interface Participant {
    id: string;
    name: string;
    email: string;
}

interface Blacklist {
    list: number[];
}

interface FormProps {
    prevStep: () => void;
    nextStep: () => void;
    activeStep: number;
}

interface NameFormProps extends FormProps {
    setNameForm: (value: string) => void;
}

interface ParticipantsFormProps extends FormProps {
    setParticipantsForm: (value: Participant[]) => void;
}

interface BlacklistFormProps extends FormProps {
    participants: Participant[] | undefined;
    setBlacklistForm: (value: Blacklist[]) => void;
}

export default function RoundupPage() {
    const [nameForm, setNameForm] = useState("");
    const [participantsForm, setParticipantsForm] = useState<Participant[] | undefined>();
    const [blacklistForm, setBlacklistForm] = useState<Blacklist[] | undefined>();

    const [activeStep, setActiveStep] = useState(1);
    const totalSteps = 5;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function sendFormData() {
        const formData = {
            name: nameForm,
            participants: participantsForm,
            blacklists: blacklistForm
        }

        return formData
    }

    const goToNextStep = () => {
        if (activeStep < totalSteps) {
            setActiveStep(activeStep + 1);
            console.log('Form Data: ' + JSON.stringify(sendFormData(), null, 2));
        }
    };

    const goToPreviousStep = () => {
        if (activeStep > 1) {
            setActiveStep(activeStep - 1);
        }
    };

    const forms = [
        <NameForm setNameForm={setNameForm} prevStep={goToPreviousStep} nextStep={goToNextStep} activeStep={activeStep} />,
        <ParticipantsForm setParticipantsForm={setParticipantsForm} prevStep={goToPreviousStep} nextStep={goToNextStep} activeStep={activeStep} />,
        <BlacklistForm participants={participantsForm} setBlacklistForm={setBlacklistForm} prevStep={goToPreviousStep} nextStep={goToNextStep} activeStep={activeStep} />,
        <TestForm formData={sendFormData()} />
    ]

    return (
        <Grid style={{ marginTop: '1em' }}>
            <GridColumn>
                <Stepper activeStep={activeStep} totalSteps={totalSteps} />
                {forms[activeStep - 1]}
                {/* <Button onClick={goToPreviousStep} disabled={activeStep === 1}>Previous</Button>
                <Button onClick={goToNextStep}>Next</Button> */}
            </GridColumn>
        </Grid>
    )
}

function NameForm({ setNameForm, prevStep, nextStep, activeStep }: NameFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onTouched' });

    function nameSubmit(data: FieldValues) {
        setNameForm(data.listName)
        nextStep()
    }

    return (
        <Form>
            <FormInput
                placeholder="List Name"
                {...register('listName', { required: true })}
                error={errors.listName && 'List name is required'}
            />
            <Button onClick={prevStep} disabled={activeStep === 1}>Previous</Button>
            <Button onClick={handleSubmit(nameSubmit)}>Next</Button>
        </Form>
    )
}

function ParticipantsForm({ setParticipantsForm, prevStep, nextStep, activeStep }: ParticipantsFormProps) {
    const { register, unregister, handleSubmit, formState: { errors } } = useForm({ mode: 'onTouched' });
    const [participants, setParticipants] = useState<Participant[]>([]);

    const addParticipant = () => {
        setParticipants([...participants, { id: uuid(), name: '', email: '' }]);
    }

    const deleteParticipant = (id: string) => {
        unregister(`pn-${id}`);
        unregister(`pe-${id}`);
        setParticipants(participants.filter(p => p.id !== id));
    }

    function participantsSubmit(data: FieldValues) {
        const participantArray: Participant[] = Object.keys(data).reduce((acc, key, index) => {
            if (key.startsWith('pn-')) {
                const uid = key.slice(3);
                const id = (index / 2) + 1;
                acc.push({
                    id: id.toString(),
                    name: data[`pn-${uid}`],
                    email: data[`pe-${uid}`]
                });
            }
            return acc;
        }, [] as Participant[]);
        setParticipantsForm(participantArray);
        nextStep();
    }

    return (
        <Form>
            <List ordered>
                {participants.map((participant: Participant) => {
                    return (
                        <ListItem key={participant.id}>
                            <FormGroup widths='equal'>
                                <FormInput
                                    placeholder="Participant's Name"
                                    {...register(`pn-${participant.id}`, { required: true })}
                                    error={errors.parName && 'Participants name is required'}
                                />
                                <FormInput
                                    placeholder="Participant's Email"
                                    {...register(`pe-${participant.id}`, { required: true })}
                                    error={errors.parName && 'Participants email is required'}
                                />
                                <Button onClick={() => deleteParticipant(participant.id)}>Delete</Button>
                            </FormGroup>
                        </ListItem>
                    )
                })}
            </List>
            <Button onClick={addParticipant}>Add Participant</Button>
            <Button onClick={prevStep} disabled={activeStep === 1}>Previous</Button>
            <Button onClick={handleSubmit(participantsSubmit)}>Next</Button>
        </Form>
    )
}

function BlacklistForm({ participants, setBlacklistForm, prevStep, nextStep, activeStep }: BlacklistFormProps) {
    const { unregister, handleSubmit, control, setValue } = useForm({ mode: 'onTouched' });
    const [blacklists, setBlacklists] = useState<Blacklist[]>([]);

    const addBlacklist = (blacklist: Blacklist) => {
        setBlacklists([...blacklists, blacklist])
    }

    const deleteBlacklist = (index: number) => {
    setBlacklists(blacklists.filter((_, i) => i !== index));
    }

    const addBlacklistItem = (index: number) => {
        const newBlacklists = [...blacklists];
        newBlacklists[index].list.push(0);
        setBlacklists(newBlacklists);
    }

    const deleteBlacklistItem = (blacklistIndex: number, itemIndex: number) => {
        const newBlacklists = [...blacklists];
        newBlacklists[blacklistIndex].list = newBlacklists[blacklistIndex].list.filter((_, i) => i !== itemIndex);
        unregister(`sbli-${blacklistIndex}-${itemIndex}`)
        setBlacklists(newBlacklists); 
    }

    function blacklistSubmit(data: FieldValues) {
        const groupedData = Object.entries(data).reduce((acc, [key, value]) => {
            const [, index] = key.split('-');
            if (!acc[index]) {
                acc[index] = [];
            }
            acc[index].push(value);
            return acc;
        }, {} as Record<string, number[]>);
        const blacklist = Object.values(groupedData).map(list => ({ list }));
    
        setBlacklistForm(blacklist);
        nextStep();
    }


    function participantOptions() {
        return (participants || []).map((participant: Participant) => {
            return { text: participant.name, value: participant.id };
        });
    }
    return (
        <Form>
            {blacklists.map((blacklist: Blacklist, index: number) => {
                return (
                    <div key={index}>
                        <Header>Blacklist - {index + 1}</Header>
                        <List ordered>
                            {blacklist.list.map((blacklistItem: number, index2: number) => {
                                return (
                                    <ListItem key={`bli-${index}-${index2}`}>
                                        <FormGroup widths='equal'>
                                            <Controller
                                                name={`sbli-${index}-${index2}`}
                                                control={control}
                                                defaultValue={blacklistItem}
                                                render={({ field }) => (
                                                    <FormSelect
                                                        options={participantOptions()}
                                                        placeholder='Participants'
                                                        {...field}
                                                        onChange={(_, data) => setValue(`sbli-${index}-${index2}`, data.value)}
                                                    />
                                                )}
                                            />
                                            <Button onClick={() => deleteBlacklistItem(index, index2)}>Delete</Button>
                                        </FormGroup>
                                    </ListItem>
                                )
                            })}
                        </List>
                        <Button onClick={() => addBlacklistItem(index)}>Add Another Participant</Button>
                        <Button onClick={() => deleteBlacklist(index)}>Delete Blacklist</Button>
                    </div>
                );
            })}

            <Button onClick={() => addBlacklist({ list: [] })}>Add Another Blacklist</Button>
            <Button onClick={prevStep} disabled={activeStep === 1}>Previous</Button>
            <Button onClick={handleSubmit(blacklistSubmit)}>Next</Button>
        </Form>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TestForm({ formData }: { formData: any }) {
    function logData() {
        console.log(JSON.stringify(formData, null, 2))
    }

    return (
        <Button onClick={logData}>Form data</Button>
    )
}