import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {state, StateType} from './redux/state'
import {renderTree} from "./render";

renderTree(state);