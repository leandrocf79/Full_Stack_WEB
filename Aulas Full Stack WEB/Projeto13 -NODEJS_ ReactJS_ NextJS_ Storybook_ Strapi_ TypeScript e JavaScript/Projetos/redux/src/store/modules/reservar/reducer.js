

export default function reservar( state =[], action ){
    //console.log('Teste função reservar()');
    //console.log(action);
    //console.log(state);

    switch(action.type){
        case 'ADD_RESERVE':
            return [ ...state, action.trip ]; //Aqui vai acrescentar os itens clicados. Parecido com uma cesta de e-commerce. Será exibido em components/Header/index.js
        default: 
            return state;   
    }
}
