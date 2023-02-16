import { useState } from "react";
//import './home.css'; Apagar. CSS já está sendo chamado em Home
import { Link } from 'react-router-dom'; // Com "L" maiúsculo

import {auth} from '../../firebaseConnection';

// Aqui no Register é createUserwithEmailAndPassword 
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { useNavigate } from 'react-router-dom'; //para fazer navegação de forma indireta

import { toast } from 'react-toastify';


export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');

  const navigate = useNavigate();// navigate para "navegar" usuário


  // Manipupar login
  async function handleRegister(e){ // Não vai deixar atualizar a página após fazer login
    e.preventDefault();
    //alert("Teste handleLogin")

    if(email !== '' && password !== ''){
      await createUserWithEmailAndPassword(auth, email, password)

      //Se der certo login pode ir para /admin
      .then(() => {

        navigate('/admin', { replace: true })

      })
      //Se não existe usuário
      .catch(() => {
        console.log("ERRO AO FAZER O CADASTRO")
        toast.error("Erro ao fazer cadastro. Verifique dados inseridos.");
      })

    }else{
      //alert("Preencha todos os campos!")
      toast.warn("Preencha todos os campos!");
    }

  }



    return (
      <div className="home-container">
        <h1>Cadastre-se</h1>
        <span>Criar sua conta na Agenda Online</span>

        <form className="form" onSubmit={  handleRegister  }>

          <input type="text" placeholder="Digite seu e-mail" value={email}
          onChange={(e)=> setEmail(e.target.value)}/>

          <input type="password" placeholder="**********" value={password}
          onChange={(e)=> setSenha(e.target.value)}/>

          <button type="submit" >Cadastrar</button>

          <Link to="/">Já possui uma conta?<br></br>Faça login.</Link>

        </form>
  
      </div>
    );
  }
  