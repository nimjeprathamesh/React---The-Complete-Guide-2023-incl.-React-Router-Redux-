import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
// import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
// import './CourseInput.css';

// const FormControl = styled.div`
//     margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     margin-bottom: 0.5rem;
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//     color: ${props => props.invalid ? 'red' : 'black'};
//     background-color: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & p {
//     margin: 0;
//     color: ${props => props.invalid ? 'red' : ''};
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid input {
//     border-color: red;
//     color: red;
//     background-color: #ffd7d7;
//   }

//   &.invalid label, p {
//     color: red;
//   }

//   & .icon-container {
//     display: flex;
//     align-items: center;
//     font-size: 12px;
//   }

//   & .icon {
//     margin-right: 8px;
//     color: ${props => props.invalid ? 'red' : ''};
//   }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        <div className="icon-container">
          <FontAwesomeIcon className='icon' icon={!isValid ? faInfoCircle : ''} />
          <p>{!isValid ? 'Please input the fields!' : ''}</p>
        </div>
      </FormControl> */}

      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        <div className={styles['icon-container']}>
          <FontAwesomeIcon className={styles.icon} icon={!isValid ? faInfoCircle : ''} />
          <p>{!isValid ? 'Please input the fields!' : ''}</p>
        </div>
      </div>

      {/*
        <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
          <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
          <input
            style={{
              backgroundColor: !isValid ? 'salmon' : 'transparent',
              borderColor: !isValid ? 'red' : '#ccc'
            }}
            type="text"
            onChange={goalInputChangeHandler}
          />
        </div>
      */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
