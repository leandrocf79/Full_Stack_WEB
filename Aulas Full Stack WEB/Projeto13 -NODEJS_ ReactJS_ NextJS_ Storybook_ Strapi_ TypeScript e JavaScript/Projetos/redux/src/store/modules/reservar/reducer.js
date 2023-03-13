import produce from "immer";

export default function reservar( state =[], action ){
    //console.log('Teste função reservar()');
    //console.log(action);
    //console.log(state);

    switch(action.type){
        case 'ADD_RESERVE': 
            return produce(state, draft =>{

                //Se já existir, somar +1
                const tripIndex = draft.findIndex(trip => trip.id === action.trip.id)
                if( tripIndex >= 0 ){
                    draft[tripIndex].amount +=1;
                }else{
                    draft.push({
                        ...action.trip,
                        amount: 1
                    });
                }         

            });
            
        //case 'REMOVE_RESERVE': fOI ALTERADO PARA ADD_RESERVE-SUCCESS. Veja explicação em actions.js
        case 'ADD_RESERVE-SUCCESS':
            return produce(state, draft=>{
                
                //apagado itens aqui e atualizado com:
                draft.push(action.trip);
                             
            });

        case 'UPDATE_RESERVE_SUCCESS': { //Verificar se há <0
            
            /* eSSA VERIFICAÇÃO já está sendo feita pelo SAGA em sagas.js    if (amount <= 0) return;
            if(action.amount <= 0 ){
                return state; //Não vai mudar nada. Vai parar em 1 item. Senão ele passa para o return abaixo e incrementa ou decrementa
            }  */

            return produce(state, draft=>{
                //PRECISA DO INDEX
                const tripIndex = draft.findIndex(trip => trip.id === action.id); //Produto encontrado

               
               //CONVERTER string para Number() para fazer a verificação
                if(tripIndex >= 0){
                    draft[tripIndex].amount = Number(action.amount); //Produto acrescentado ou decrementado
                } 
                
            });
        }


        default: 
            return state;   
    }
}


/*Aumentar itens na reserva em vez de duplicar.
Como é imutavel e não será possivel utilizar state.push()
será necessário instalar uma biblioteca chamada Immer
https://immerjs.github.io/immer/

Vai ajudar com essa parte de imutabilidade.
npm install immer

produce() passar PRIMEIRO a state original e depois a cópia.
produce(state, draft   //draft é a cópia

*/
