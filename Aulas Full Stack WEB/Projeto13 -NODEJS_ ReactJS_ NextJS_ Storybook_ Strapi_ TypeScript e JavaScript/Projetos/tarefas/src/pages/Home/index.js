import { useState } from "react";
import './home.css';
import { Link } from 'react-router-dom'; // Com "L" maiúsculo

import { auth } from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; //para fazer navegação de forma indireta

import { toast } from 'react-toastify';

export default function Home() {

  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');

  const navigate = useNavigate();// navigate para "navegar" usuário



  // Manipupar login
  async function handleLogin(e){  // Não vai deixar atualizar a página após fazer login
    e.preventDefault();
    //alert("Teste handleLogin")

    if (email !== '' && password !== ""){
      await signInWithEmailAndPassword(auth, email, password)

      //Se der certo login pode ir para /admin
      .then(()=>{

        navigate('/admin', { replace: true })

      })
      //Se não existe usuário
      .catch(()=>{
        console.log("Erro ao fazer login.");
        toast.error("Erro ao fazer login. Dados incorretos");         
        //alert("Dados incorretos")

      })

    }else{
      //alert("Preencha todos os campos!")
      toast.warn("Preencha todos os campos!");

    }
    
  }


    return (
      <div className="home-container">
        
        <h1>Lista de tarefas</h1>
        <span>Gerencie sua agenda</span>

        <form className="form" onSubmit={ handleLogin }>

          <input type="text" placeholder="Digite seu e-mail" value={email}
          onChange={(e)=> setEmail(e.target.value)}/>

          <input type="password" placeholder="**********" value={password}
          onChange={(e)=> setSenha(e.target.value)}/>

          <button type="submit">Acessar</button>

          <Link to="/register">Não possui uma conta?<br></br>Cadastre-se.</Link>

        </form>
  
      </div>
    );
  }
  