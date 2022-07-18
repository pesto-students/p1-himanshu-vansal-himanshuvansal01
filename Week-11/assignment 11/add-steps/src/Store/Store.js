import addCounter from "../Reducer/AddCounterReducer";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({

    reducer: addCounter

});

export default store;