//ajustar o SAGA. IMPORTAR updateAmountReserve
import { addReserveSuccess, updateAmountSuccess } from './actions';

//ajustar o SAGA. IMPORTAR SELECT
import {select, call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

//onde será feita a navegação
import history from '../../../services/history';

function* addtoReserve( { id } ){

    // ajustar o SAGA. Verificar se item já existe na lista. yield para esperar.
    const tripExists = yield select(
        state => state.reservar.find(trip => trip.id === id)//Para ver se encontra a viagem na lista
    );
    
/*  limite de quantidade disponível
http://localhost:3333/stock/1
stock é o nome que já está na API.
*/
        const myStock = yield call(api.get, `/stock/${id}`);
        const stockAmount= myStock.data.amount;//Aqui já vai ter a quantidade permitida no estoque
        //Agora pegar o estoque atual
        const currentStock = tripExists ? tripExists.amount : 0;
        //agora tem que somar 
        const amount = currentStock + 1;
        //Validar isso
        if(amount > stockAmount){
            alert('Atingiu o limite disponível');
            return;
        }//Se não passou da quantidade permitida entra no proximo if para adicionar

//*******IMPORTANTE******* Essa verificação vai ocorrer somente na parte http://localhost:3000/ 
// no botão 'Solicitar reserva' que é o SAGA que está verificando 

    //Se já existe na lista acrescentar em amount
    if(tripExists){
        //const amount = tripExists.amount + 1;// Essa validação passou para cima.

        yield put(updateAmountSuccess(id, amount));


    }//Se não existe, Fazer a requisição e chamar o success. Saga está responsavel por isso
    else{

        const response = yield call (api.get, `trips/${id}`);
        //Precisa avisar que é amount + 1
        const data = {
            ...response.data,
            amount: 1
        }

        yield put( addReserveSuccess(data) );
//onde será feita a navegação
        history.push('/reservas');//Assim só irá abrir a página após o carregamento completo dela

    }
    
}


// http://localhost:3000/reservas  Corrigindo número limite de itens
function* updateAmount( {id, amount} ){

    //Fazer a comparação do estoque com a solicitação. amount é a quantidade atual
    if (amount <= 0) return; //Neste caso pode escrever assim.

    const myStock = yield call(api.get, `/stock/${id}`);
    const stockAmount= myStock.data.amount;//Quantidade no estoque.

    if(amount > stockAmount){
        alert('Atingiu o limite disponível');
        return;
    }//Se não for maior pode chamar o put para disparar, chamar uma action e passar o id e quantidade

    yield put(updateAmountSuccess(id, amount));
    // Precisa corrigir em reducer. Não existe mais 'UPDATE_RESERVE', agora é 'UPDATE_RESERVE_SUCCESS'
 
}

export default all( [
    takeLatest('ADD_RESERVE_REQUEST', addtoReserve), //Criar um novo módulo chamado rootSaga.js

    takeLatest('UPDATE_RESERVE_REQUEST', updateAmount)

] )
