import { createStore, combineReducers } from 'redux';
import tcData from './modules/tcData';
import tcSheetName from './modules/tcSheetName';
import selectResult from './modules/selectResult';
import bugData from './modules/bugData';
import sheetResultData from './modules/sheetResultData';
import selectSheet from './modules/selectSheet';

const rootReducer = combineReducers({
  tcData,
  tcSheetName,
  selectResult,
  bugData,
  sheetResultData,
  selectSheet,
});
const store = createStore(rootReducer);
export default store;
