import React, {useState} from 'react'

import styled from 'styled-components';

import '../css/Toddo.css'

import Button from '../Button/Button';



const FormInput = styled.div`

margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}



& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid input{
  border-color: red;
  background: #ffd7d7
}




&.invalid label{
  color: red;
  
}
`;

function Toddo(props) {

    const [userInput, setUserInput] = useState("Enter Text");

    const [valid, setValid] = useState(true)

    function changeInputHandler(e){
        e.preventDefault();
        setValid(true);
        setUserInput(e.target.value);
        console.log(e.target.value)
    
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        if(userInput.trim().length === 0){
          setValid(false);
          console.log(valid);
          return;
    }

    props.addToddo(userInput);
}


  return (
          <form onSubmit={formSubmitHandler}>
              <FormInput>
                  <label>TODO LIST</label>
          <input type= "text" placeholder = {userInput} onChange={changeInputHandler}
          />
          </FormInput>
          <Button type="submit">Add Toddo</Button>
          </form>
    
  )
}

export default Toddo