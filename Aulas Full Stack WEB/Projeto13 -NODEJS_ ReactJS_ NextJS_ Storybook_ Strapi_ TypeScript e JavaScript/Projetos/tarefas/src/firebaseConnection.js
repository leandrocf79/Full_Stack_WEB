import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'; // Foi o BD escolhido

import { getAuth } from 'firebase/auth'; // Para cadastrar e login de usuários. Faz autenticação

// verificar os dados corretos do DB
const firebaseConfig = {
  apiKey: "AIzaSyCauR2iECRsDFibbWnlfJYqzP_wBCuDEns",
  authDomain: "tarefas-802fe.firebaseapp.com",
  projectId: "tarefas-802fe",
  storageBucket: "tarefas-802fe.appspot.com",
  messagingSenderId: "948349682769",
  appId: "1:948349682769:web:0203abd8279629d60de470",
  measurementId: "G-39T99JQ5K5"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

// Para cadastrar e login de usuários. Faz autenticação
const auth = getAuth(firebaseApp);//firebaseApp faz a conexão com BD

export { db, auth }; // Não foi default, quando for importar será entre chaves {}
