import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Room from "./Room";
import {useSelector, useDispatch, Provider} from "react-redux";
import store from "./Store/Store"



store.subscribe(() => console.log(store.getState()));

ReactDOM.render(

  

<Provider store={store}>
<Room />
</Provider>




, 


document.getElementById("root"));
