import { useState, useEffect } from 'react';

import { auth } from '../firebaseConnection'; // Para fazer a conexão com autenticação
import { onAuthStateChanged } from 'firebase/auth'; // Vericar se tem usuário logado 
//import { async } from '@firebase/util';

import { Navigate } from 'react-router-dom';

export default function Private({children}){
    //console.log('Teste de login');

    const [loading, setLoading] = useState(true);

    //verificar se está logado:
    const [signed, setSigned] = useState(false); //Não inicia logado
    
    useEffect(()=>{
        async function checkLogin(){
            const unsub = onAuthStateChanged(auth, (user)=>{
                
                //verificar se tem user logado:
                if(user){
                    //Se tiver logado manter em localStorage
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                    }
                    // passar localStorage para string com JSON para poder salvar
                    localStorage.setItem("@detailUser", JSON.stringify(userData));
                    setLoading(false);
                    setSigned(true); // Agora usuário está logado

                }else{
                    // não possui user logado
                    setLoading(false);
                    setSigned(false);
                }
                console.log(unsub);

            })

        }
        checkLogin();

     }, [])

     //Se tiver carregado informações de usuário deixar em branco mesmo
     if(loading){
        return(
            <div></div>
        )
     }
     //Se NÃO estiver logado vai para home
     if(  !signed  ){
        return <Navigate to="/" />
     }


    return children; // após passar por todas as verificações pode seguir. childrem

}



