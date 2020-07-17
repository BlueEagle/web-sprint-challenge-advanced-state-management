import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import smurfReducer from './reducers/smurfReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import "./index.css";
import App from "./components/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  smurfReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
