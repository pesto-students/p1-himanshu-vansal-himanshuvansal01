import React from 'react'
import '../css/Toddo.css'
import ToddoChildren from './ToddoChildren'
import { BsXCircleFill} from "react-icons/bs";


function ToddoList(props) {

  const deleteHandler = (id) => {
    props.onDelete(id)
}

  return (
    <div>
    <ul className="arrange-list">


    {props.data.map(e => 
    <ToddoChildren 
    key={e.id} 
    id={e.id} 
    onDelete={props.onDelete}
    >
      {/* <li className="arrange-order" key={e.id} id={e.id} onDeleteEvent={props.onDelete}>
        {e.text}
        {e.id}
      s
      </li> */}
      {e.text}   

      <BsXCircleFill onClick={() => deleteHandler(e.id)} />
      </ToddoChildren>
    )}




    </ul>
</div>

  )
}

export default ToddoList