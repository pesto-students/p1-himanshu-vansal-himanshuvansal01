import React from 'react'

import { configureStore } from '@reduxjs/toolkit'

const initialState = true

console.log(initialState);

function FlipReducer(state = initialState ,action) {


    if(action.type === 'TURN OFF'){

        state = action.value;

        return state;
    }

    else{
        
        return state;
    }
  
}


export default FlipReducer;