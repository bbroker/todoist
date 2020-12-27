import {combineReducers} from 'redux';
import taskList from './taskList';
import openStatusComponents from './openStatusComponents';
import task from './task';

const appReducer = combineReducers({
    taskList,
    openStatusComponents,
    task
});

export default appReducer;