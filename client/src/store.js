import { batchedSubscribe } from 'redux-batched-subscribe';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { debounce } from 'lodash';
import reducer from './services';

const preloadedState = {};

const debounceNotify = debounce((notify) => notify());

const store = configureStore({
  reducer,
  enhancers: (getDefaultEnhancers) => {
    return getDefaultEnhancers(batchedSubscribe(debounceNotify)).concat();
  },
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

export default store;
