import React from 'react';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import './reservas.css';

//Adicionar reserva   //Remover uma reserva.
import { useSelector, useDispatch } from 'react-redux';

/*Incrementar e decrementar quantidade de itens no pacote */
import { removeReserve, updateAmountRequest } from '../../store/modules/reservar/actions';

export default function Reservas() {

//Adicionar reserva
  const reserves = useSelector(state => state.reservar);
//Veja em:  http://localhost:3000/reservas
  //console.log('teste adicionar reserva. Reservas()', reserves );// Confirmado acesso ao reducer.

//Remover uma reserva.
  const dispatch =useDispatch();


//Remover uma reserva.
function handleRemove(id){
  //alert(id); //teste
  //Agora precisa disparar uma ação para o reducer poder remover. Será utilizadop o useDispatch
  dispatch( removeReserve(id) )
}



/*Incrementar e decrementar quantidade de itens no pacote */
function decrementAmount(trip){
  //console.log(trip);
  //Está funcionando, agora precisa disparar uma ação. dispatch. Ir em modules/reservar/actoins.js
  dispatch(updateAmountRequest(trip.id, trip.amount - 1 ))

   //Agora precisa ir no reducer trabalhar essa action
}

/*Incrementar e decrementar quantidade de itens no pacote */
function incrementAmount(trip){
  //console.log(trip);
  //Está funcionando, agora precisa disparar uma ação. dispatch. Ir em modules/reservar/actoins.js
  dispatch(updateAmountRequest(trip.id, trip.amount + 1 ))

  //Agora precisa ir no reducer trabalhar essa action
}


 return (
   <div>
    <h1 className='title'>Você solicitou { reserves.length < 1 ? `${reserves.length} reserva` : `${reserves.length} reservas`} </h1>

{/*//Adicionar reserva */}
    {reserves.map(item=>(     

      <div className='reservas' key={item.id}>{/*Toda vez que usar map() usar uma key no container */}
        <img 
          src={item.image}
          alt={item.title}
        />
        <strong>{item.title}</strong>

        {/*Incrementar e decrementar quantidade de itens no pacote */}
        <div id='amount'>
          <button type='button' onClick={()=>decrementAmount(item)}>
          <MdRemoveCircle size={25} color='#191919'/>
          </button>

          <input type='text' readOnly value={ item.amount }></input> {/*//Aumentar itens na reserva em vez de duplicar. */}

          <button type='button' onClick={()=>incrementAmount(item)}>
          <MdAddCircle size={25} color='#191919'/>
          </button>
        
        </div>


        {/*//Remover uma reserva. */}
        <button
          type='button'
          onClick={()=> handleRemove(item.id) }
        >
          <MdDelete size={20} color='#191919'/>
        </button>
      </div>

    ))}

    
      <footer>
        <button type='button' >Solicitar reservas</button>
      </footer>
   </div>
 );
}