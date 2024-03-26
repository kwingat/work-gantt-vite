import { combineReducers } from '@reduxjs/toolkit';
import login from './reducers/login';
import operations from './reducers/operations';

const reducer = combineReducers({ login, operations });

export default reducer;
