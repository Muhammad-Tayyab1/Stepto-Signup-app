import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalInfo from './components/PersonalInfo';
import PaymentInFo from './components/PaymentInfo';
import Signup from './components/Signup';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Form 1 out of 3', 'Form 2 out of 3', 'Form 3 out of 3'];
}

function getStepContent(stepIndex:number,handleNext: () => void) {
  switch (stepIndex) {
    case 0:
        return <PersonalInfo handleNext={handleNext}/>;
        case 1:
      return <PaymentInFo handleNext={handleNext}/>;
    case 2:
      return <Signup handleNext={handleNext}/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function StepperComponent() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
      console.log("Clicking Next")
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}><h1>Steps are Completed</h1></Typography>
            <Button onClick={handleReset}  style={{backgroundColor:"gold"}}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep,handleNext)}</Typography>
          </div>
        )}
      </div>
    </div>
  );
}