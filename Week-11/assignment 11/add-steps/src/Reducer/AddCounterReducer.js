import React from 'react';

const initialState = 0;

function addCounter(state = initialState, action) {

    switch(action.type){

        case "INCREMENT":
            return state + 1;

        case "RESET":
            return state = 0;

        default:
            return state;
    }


}



export default addCounter;

