/*
npm install redux react-redux

**Está em desuso 'createStore' o recomendado é usar 'configureStore' do
npm install @reduxjs/toolkit

*/

import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = configureStore({
  reducer: rootReducer,
  enhancers : [enhancer]
  
});

sagaMiddleware.run(rootSaga);

export default store;





