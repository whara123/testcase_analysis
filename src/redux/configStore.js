import { createStore, combineReducers } from 'redux';
import tcData from './modules/tcData';
import tcSheetName from './modules/tcSheetName';

const rootReducer = combineReducers({ tcData, tcSheetName });
const store = createStore(rootReducer);
export default store;
