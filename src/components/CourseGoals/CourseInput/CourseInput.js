import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import { valid } from 'semver';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  // to check that user has given input or not?
  const[isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    };
setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length ===0) {
setIsValid(false);
   setEnteredValue("Click to remove")
  }  
   
    // yaha se yeah app.js me value pass kar raha hai, also known as lifting state up..
    props.onAddGoal(enteredValue)
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValid ? 'red':"black"}}>Course Goal</label>
        <input  style={{backgroundColor: !isValid ? 'orange':'transparent',borderColor:!isValid? 'yellow':'blue'}}type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
