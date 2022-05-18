import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, StateType} from './redux/state'
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const renderTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree(state);