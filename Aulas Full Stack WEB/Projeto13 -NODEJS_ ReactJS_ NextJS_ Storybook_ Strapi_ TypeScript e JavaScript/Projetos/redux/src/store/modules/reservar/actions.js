
// export function addReserve(trip){

/*
export function addReserve(id){
    //Em pages/Home/index.js
    return{
        type: 'ADD_RESERVE',
        id    //Trip é o que esta recebendo por parâmetro. Será passado para modules/reservar/reducer.js
    //Foi trocado por id. Veja comentário ***
    }
}


*** Essa vigem podeira ter mais exemplos como voo, escala, valores, tempo, 
companhia, hotel, hora de saída e chegada etc.
Porém em "reservas" exibir apenas o nome da viagem. 'trip' está passando TODA  trip, mas o 'id' é suficiente.

É preciso alterar em Home/index.js e mudar no botão handleAdd para (trip.id) e na função também,

function handleAdd(id){
  //console.log(trip);// Passar uma ação para Redux. Obrigatório uso do type
  dispatch( addReserve(id) );
}

Quem vai receber a partir de agora não é mais o reducer, mas sim o Reducer Saga em sagas.js.

Agora foram criadas 2 funções para distribuir:
addReserveRequest()  Quem ouve esse é o SAGA
e
addReserveSuccess()  Quem ouve esse é o REDUCER
*/

export function addReserveRequest(id){ // Quem ouve esse é o SAGA
    return{
        type: 'ADD_RESERVE_REQUEST',
        id    
    }
}

export function addReserveSuccess(trip){  // Quem ouve esse é o REDUCER
    return{
        type: 'ADD_RESERVE-SUCCESS',
        trip   
    }
}




export function removeReserve(id){
    //Em pages/Reservas/index.js
    return{
        type: 'REMOVE_RESERVE',
        id   //id é o item que será enviado para reducer.js
      }
}

/*http://localhost:3000/reservas  Corrigindo número limite de itens */
export function updateAmountRequest(id, amount){ // Será ouvido pelo SAGA
    //Necessário o Id e Quantidade
    return{
    type: 'UPDATE_RESERVE_REQUEST',
    id,
    amount
    }
}

export function updateAmountSuccess(id, amount){ // Será ouvido pelo Reducer
    //Necessário o Id e Quantidade
    return{
    type: 'UPDATE_RESERVE_SUCCESS',
    id,
    amount
    }
}