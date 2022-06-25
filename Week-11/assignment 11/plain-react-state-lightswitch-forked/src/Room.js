import React, { Component } from 'react'

import {useSelector, useDispatch, Provider} from "react-redux";
import { turnOFF, turnON } from './Actions/Action';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {

  console.log(state)
  return {
    flip: state
  }


}

const mapDispatchToProps = (dispatch) =>{




  return {
    turnOn: () => dispatch(turnON()),
    turnOff: () => dispatch(turnOFF()),



    


}
}

class Room extends React.Component {

 


    state = {
      isLightOn: this.props.flip

      
    };
  
    flipLight = () => {


      this.setState({
        
        isLightOn: !this.state.isLightOn
        
      });


    };
  
    
    
  
    render() {
  
  
      const lightedness = this.state.isLightOn ? "lit" : "dark";

      return (
        <div className={`room ${lightedness}`}>
          the room is {lightedness}
          <br />
          <button onClick={this.flipLight}>flip</button>
        </div>
      );
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps) (Room);