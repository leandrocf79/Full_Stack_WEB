/*
npm install redux react-redux

**Está em desuso 'createStore' o recomendado é usar 'configureStore' do
npm install @reduxjs/toolkit

*/

import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './modules/rootReducer';

const store = configureStore({ reducer: rootReducer })

export default store;


