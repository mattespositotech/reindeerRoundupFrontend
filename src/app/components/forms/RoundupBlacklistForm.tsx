import { Controller, FieldValues, useForm } from "react-hook-form";
import { addToStoredData, loadStoredData } from "../../utils/Session";
import { Button, Form, FormGroup, FormSelect, Header, List, ListItem } from "semantic-ui-react";
import { Blacklist, Participant } from "../../types/FormTypes";
import { useState } from "react";

interface RoundupBlacklistFormProps {
    back: () => void;
    next: () => void;
}

export default function RoundupBlacklistForm({back , next}: RoundupBlacklistFormProps) {
    //const { unregister, handleSubmit, control, setValue } = useForm();
    //const [blacklists, setBlacklists] = useState<Blacklist[]>([]);
    
    // function submit(data: FieldValues) {
    //     console.log(data)
    //     addToStoredData('roundupBlacklists', data)
    //     next()
    // }

    // move to utils
    function participantOptions() {
        const participants = loadStoredData('roundupParticipants')
        const participantArray: Participant[] = Object.keys(participants).reduce((acc, key, index) => {
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
        console.log(participants)
    }

  return (
    <Form>
            <Button onClick={participantOptions}>Participants</Button>
            <Button onClick={back}>Back</Button>
            <Button>Next</Button>
        </Form>
  )
}