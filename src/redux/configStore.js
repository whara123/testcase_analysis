import { createStore, combineReducers } from 'redux';
import tcData from './modules/tcData';
import tcSheetName from './modules/tcSheetName';
import selectResult from './modules/selectResult';
import bugData from './modules/bugData';

const rootReducer = combineReducers({
  tcData,
  tcSheetName,
  selectResult,
  bugData,
});
const store = createStore(rootReducer);
export default store;
