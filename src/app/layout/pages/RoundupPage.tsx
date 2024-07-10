import { useState } from "react";
import Stepper from "../../components/Stepper";
import RoundupNameForm from "../../components/forms/RoundupNameForm";
import RoundupBlacklistForm from "../../components/forms/RoundupBlacklistForm";
import RoundupParticipantsForm from "../../components/forms/RoundupParticipantsForm";

export default function RoundupPage() {
  const [activeStep, setActiveStep] = useState<number>(1);

  function next() {
    setActiveStep(activeStep + 1)
  }
  function back() {
    setActiveStep(activeStep - 1)
  }

return (
  <div style={{ marginTop: '5em' }}>
    <Stepper activeStep={activeStep} totalSteps={5} />
    {activeStep === 1 && <RoundupNameForm next={next} />}
    {activeStep === 2 && <RoundupParticipantsForm back={back} next={next} />}
    {activeStep === 3 && <RoundupBlacklistForm back={back} next={next} />}
  </div>
)
}