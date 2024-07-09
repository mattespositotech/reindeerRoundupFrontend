import { Step, StepContent, StepDescription, StepGroup, StepTitle } from "semantic-ui-react";

interface StepperProps {
    activeStep: number;
    totalSteps: number;
}

export default function Stepper({ activeStep, totalSteps }: StepperProps) {
    const stepDetails = [
        { title: 'Name', desc: 'Name This Roundup' },
        { title: 'Cantact Info', desc: 'Add the contact info for your participants' },
        { title: 'Blacklists', desc: 'Add participants to blacklists' },
        { title: 'Date', desc: 'Date for the exchange' },
        { title: 'Message', desc: 'Add a message for the exchange' },
    ]

    return (
        <StepGroup ordered size="mini" fluid>
            {[...Array(totalSteps).keys()].map((index) => (
                <Step key={index} active={activeStep === index + 1} completed={index < activeStep - 1}>
                    <StepContent>
                        <StepTitle>{stepDetails[index].title}</StepTitle>
                        <StepDescription>{stepDetails[index].desc}</StepDescription>
                    </StepContent>
                </Step>
            ))}
        </StepGroup>
    )
}