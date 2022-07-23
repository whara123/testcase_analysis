import { createStore, combineReducers } from 'redux';
import tcData from './modules/tcData';
import tcSheetName from './modules/tcSheetName';
import selectResult from './modules/selectResult';

const rootReducer = combineReducers({ tcData, tcSheetName, selectResult });
const store = createStore(rootReducer);
export default store;
