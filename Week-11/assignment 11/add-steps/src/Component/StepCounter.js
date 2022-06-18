import React from 'react'

import {useSelector, useDispatch} from 'react-redux';
import { addNumber , resetNumber} from '../Action/Action';
import './StepCounter.css';
import styled from 'styled-components';

const Button = styled.button`

background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
margin-right: 50px;

`;

const ResetButton = styled.button `

background: #c7b3b3;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
margin-right: 50px;

`;

function StepCounter() {

    const state = useSelector(
        (state) => {  
            return state;
        }
    )

    const dispatch = useDispatch();
  return (
    <div>

        <p className='state'>You have walked {state} steps today!</p>
   
   <div className='add-button'>
        <Button onClick={() => dispatch(addNumber())} >Add a step</Button>
      
        <ResetButton onClick={() => dispatch(resetNumber())} >Reset</ResetButton>
    </div>
    </div>
  )
}

export default StepCounter