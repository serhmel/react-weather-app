import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import WeatherApp from "./WeatherApp";
import "./styles.scss";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <WeatherApp />
    </Provider>,
  document.getElementById('root')
);

