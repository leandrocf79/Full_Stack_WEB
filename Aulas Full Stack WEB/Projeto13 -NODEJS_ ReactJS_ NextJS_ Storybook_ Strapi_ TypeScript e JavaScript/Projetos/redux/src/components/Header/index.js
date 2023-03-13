import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './style.css';

//Clique do botão reservar.
import { useSelector } from 'react-redux';//Vai conectar Redux com reducer

export default function Header() {

//Clique do botão reservar.
  const reserveSize = useSelector( state => state.reservar.length );
  
 // console.log(reserveSize);


 return (
   <header className='container' >
    <Link to='/'>
      <img className='logo' src={logo} alt='Logo do projeto' />
    </Link>

    <Link className='reserva' to='/reservas'>
      <div>
        <strong>Minhas reservas</strong>

{/* Clique do botão reservar. */}
        <span>{reserveSize > 1 ?  `${reserveSize} reservas` : `${reserveSize} reserva`}</span> 
      </div>
    </Link>

   </header>
 );
}