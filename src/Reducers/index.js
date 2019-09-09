import {combineReducers} from 'redux';
import taskReducer from './tasks';

const Reducers = combineReducers({
    tasks: taskReducer
})
export default Reducers;