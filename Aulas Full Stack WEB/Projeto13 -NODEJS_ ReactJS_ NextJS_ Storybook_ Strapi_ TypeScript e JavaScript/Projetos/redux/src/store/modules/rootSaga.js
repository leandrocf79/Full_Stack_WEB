import { all } from 'redux-saga/effects';
import reservar from './reservar/sagas';

export default function* rootSaga(){
    return yield all( [
        reservar,
    ])
} //Importar createSagaMiddleware no modules/index.js
