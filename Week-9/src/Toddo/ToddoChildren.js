import React from 'react'


function ToddoChildren(props) {

 
  return (
    <div>
    
      <li className="arrange-order" >
        {props.children}
    
      </li>

    </div>
  )
}

export default ToddoChildren