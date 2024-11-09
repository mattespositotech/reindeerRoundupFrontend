import { useState } from "react";
import Stepper from "../../components/Stepper";
import RoundupNameForm from "../../components/forms/RoundupNameForm";
import RoundupBlacklistForm from "../../components/forms/RoundupBlacklistForm";
import RoundupParticipantsForm from "../../components/forms/RoundupParticipantsForm";
import RoundupDateForm from "../../components/forms/RoundupDateForm";
import RoundupMessageForm from "../../components/forms/RoundupMessageForm";

export default function RoundupPage() {
  const [activeStep, setActiveStep] = useState<number>(1);

  function next() {
    setActiveStep(prevStep => Math.min(prevStep + 1, 5))
  }
  function back() {
    setActiveStep(prevStep => Math.max(prevStep - 1, 1))
  }

return (
  <div>
    <Stepper activeStep={activeStep} totalSteps={5} />
    {activeStep === 1 && <RoundupNameForm next={next} />}
    {activeStep === 2 && <RoundupParticipantsForm back={back} next={next} />}
    {activeStep === 3 && <RoundupBlacklistForm back={back} next={next} />}
    {activeStep === 4 && <RoundupDateForm back={back} next={next} />}
    {activeStep === 5 && <RoundupMessageForm back={back} />}
  </div>
)
}