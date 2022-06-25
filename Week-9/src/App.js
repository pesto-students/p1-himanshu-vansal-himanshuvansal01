import logo from './logo.svg';
import './App.css';
import Toddo from './Toddo/Toddo';
import { useState } from 'react';
import ToddoList from './Toddo/ToddoList';

import './css/Toddo.css';


function App() {

  const [toddo , setToddo] = useState([
    {text: "Do the react assignments", id : "1"},
    {text: "Do the javadcript assigmments", id : "2"}
  ]);

const deleteHandler = (goalId) => {

  setToddo(prevList => {
    let updateList = [...prevList];
    console.log("deleteHandler-----------");

    console.log("goalid", goalId);

    console.log( updateList.filter(goal => goal.id !== goalId))
    return updateList.filter(goal => goal.id !== goalId)
 
   
  });

};



const addUserInput =(userInput) => {
  
  setToddo(prevList => {
    const updateList = [...prevList];
    updateList.unshift({text: userInput, id: Math.random().toString()})
    return updateList;
  })

}


// const content = toddo.length === 0 ? <h1>"No content to display"</h1> : 
// <ToddoList data = {toddo}/>

  return (
    <div className="App">
      <section id="add-list">
      <Toddo addToddo={addUserInput}/>
      </section>

      <section id="list">
      <ToddoList data = {toddo} onDelete = {deleteHandler} />
      </section>

    </div>
  );
}

export default App;
