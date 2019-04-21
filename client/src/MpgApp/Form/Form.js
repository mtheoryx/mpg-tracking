import React, { useRef } from 'react';
import styled from 'styled-components';
import { useInput } from './FormHooks';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 98vw;
  margin: 15px auto;
`;

const StyledInput = styled.input`
  font-size: 1.5em;
  padding: 0.9em;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 5px;
  &:focus {
    border: 1px solid #663399;
  }
`;

const StyledButton = styled.button`
  font-size: 1.5em;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #efefef;
`;

const Form = ({ handleAddItem }) => {
  // Refs for controlling tab nav (make hitting enter move to next input)

  const dateInput = useRef(null);
  const odometerInput = useRef(null);
  const fuelInput = useRef(null);
  const costInput = useRef(null);
  const formSubmitButton = useRef(null);

  // Event handling
  const onHandleSubmit = e => {
    e.preventDefault();

    handleAddItem({
      date: new Date(date),
      odometer: Number(odometer),
      fuel: Number(fuel),
      cost: Number(cost)
    });
    clearForm();
    dateInput.current.focus();
  };
  const clearForm = _ => {
    resetDate();
    resetOdometer();
    resetCost();
    resetFuel();
  };
  // let defaultDate = new Date();

  // const { value: date, bind: bindDate, reset: resetDate } = useInput(
  //   `${defaultDate.toISOString().substr(0, 10)}`
  // );

  const { value: date, bind: bindDate, reset: resetDate } = useInput('');

  const {
    value: odometer,
    bind: bindOdometer,
    reset: resetOdometer
  } = useInput('');

  const { value: cost, bind: bindCost, reset: resetCost } = useInput('');

  const { value: fuel, bind: bindFuel, reset: resetFuel } = useInput('');

  return (
    <React.Fragment>
      <StyledForm onSubmit={onHandleSubmit}>
        <StyledInput
          type="date"
          autoFocus={true}
          ref={dateInput}
          value={date}
          {...bindDate}
          name="date"
          required
        />
        <StyledInput
          type="number"
          ref={odometerInput}
          placeholder="Odometer"
          value={odometer}
          {...bindOdometer}
          name="odometer"
          required
        />
        <StyledInput
          type="number"
          ref={fuelInput}
          placeholder="Fuel"
          value={fuel}
          {...bindFuel}
          step="any"
          name="fuel"
          required
        />
        <StyledInput
          type="number"
          ref={costInput}
          placeholder="Cost"
          value={cost}
          {...bindCost}
          name="cost"
          step=".01"
          required
        />
        <StyledButton type="submit" ref={formSubmitButton}>
          Add Entry
        </StyledButton>
      </StyledForm>
    </React.Fragment>
  );
};

export default Form;
