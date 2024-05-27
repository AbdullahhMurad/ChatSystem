import { configureStore } from "@reduxjs/toolkit";
// import {thunk} from 'redux-thunk'
import rootReducer from './reducers'

// const store = configureStore(rootReducer, applyMiddleware(thunk))
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
   
  });

export default store