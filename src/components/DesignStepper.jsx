import { Box, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";

const DesignStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleChange = (key) => {
    switch (key) {
      case 0:
        setActiveStep(0);
        break;
      case 1:
        setActiveStep(1);
        break;
    }
  };

  const getStepCount = (step) =>{
    switch(step){
        case 0:
            return <Component3/>
            break;
            case 1:
            return <Component2/>
    }
  }

  return (
    <>
      <Stepper activeStep={activeStep}>
        <Step onClick={() => handleChange(0)}>
          <StepLabel>Step 1</StepLabel>
        </Step>
        <Step onClick={() => handleChange(1)}>
          <StepLabel>Step 2</StepLabel>
        </Step>
      </Stepper>
      <Box>
        {getStepCount(activeStep)}
      </Box>
    </>
  );
};

export default DesignStepper;
