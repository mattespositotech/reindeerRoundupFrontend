import Stepper from "../../../components/Stepper";

export default function RoundupPage() {
  return (
    <div style={{ marginTop: '5em' }}>
        <Stepper activeStep={1} totalSteps={5} />
    </div>
  )
}