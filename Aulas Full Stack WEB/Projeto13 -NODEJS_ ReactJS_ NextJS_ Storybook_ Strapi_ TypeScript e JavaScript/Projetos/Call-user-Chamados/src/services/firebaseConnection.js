
/*  VERSÃO 8 do firebase
import firebase from "firebase/app";
import "firebase/auth";  
import "firebase/firestore";
*/

// VERSÃO 9 compatível do firebase. Depois é interessante corrigir todo o código para versão MODULAR
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Para editar ARQUIVOS de usuário
import 'firebase/compat/storage';


  const firebaseConfig = {
    apiKey: "AIzaSyD2CEhyvuja_VfX3I-J_UsYFhdSbj6f7WA",
    authDomain: "sistema-729c7.firebaseapp.com",
    projectId: "sistema-729c7",
    storageBucket: "sistema-729c7.appspot.com",
    messagingSenderId: "578397195408",
    appId: "1:578397195408:web:9dc527bf09eb66ab22dc15",
    measurementId: "G-H4QZLZVN0J"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
 
  export default firebase;
