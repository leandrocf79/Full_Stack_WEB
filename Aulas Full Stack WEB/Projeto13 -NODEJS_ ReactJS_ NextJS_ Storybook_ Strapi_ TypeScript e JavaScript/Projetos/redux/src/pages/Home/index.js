import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import {MdFlightTakeoff} from 'react-icons/md';
import './home.css';

//Clique do botão reservar
import { useDispatch } from 'react-redux';

export default function Home() {
  const [trips, setTrips]= useState([]);

  const dispatch = useDispatch();//Clique do botão reservar

  useEffect(()=>{
    async function loadApi(){
      const response = await api.get('trips'); //Acessar trips em api
      setTrips(response.data);
      //console.log(response.data); //Verificar se está tudo ok
    }

    loadApi(); //Criou a função e sempre tem que chamar fora dela

  }, []);


//Clique do botão reservar.
function handleAdd(trip){
  //console.log(trip);// Passar uma ação para Redux. Obrigatório uso do type
  dispatch({
    type: 'ADD_RESERVE',
    trip    //Trip é o que esta recebendo por parâmetro. Será passado para modules/reservar/reducer.js
  });
}



//veja http://localhost:3333/trips   para preencher esta parte
 return (
   <div>
    <div className='box'>
      {trips.map(trip=>(
        <li key={trip.id}>
          <img src={trip.image} alt={trip.title} />
          <strong>{trip.title}</strong>
          {/*<span>Status: {trip.status}</span> *Neste caso boolean pode fazer uma renderização condicional para exibir mensagens */}
          <span>Status: {trip.status ? 'Disponível' : 'Indisponível no momento'}</span>

{/*//Clique do botão reservar. Passar todo o conteudo da vigem com 'trip' para essa nova função*/}
          <button type='button' 
          onClick={()=> handleAdd(trip) }>
            <div>
              <MdFlightTakeoff size={18} color='#fff'/>
            </div>
            <span>Solicitar reserva</span>
          </button>
        
        </li>

      ))}

    </div>
   </div>
 );
}