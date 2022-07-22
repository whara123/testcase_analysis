import { createStore, combineReducers } from 'redux';
import tcData from './modules/tcData';

const rootReducer = combineReducers({ tcData });
const store = createStore(rootReducer);
export default store;
