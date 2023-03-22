import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//Importar também getFirestore que é o BD escolhido
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAo_7KJMyYKd3GRealC3jam-XDCQW61EeU",
  authDomain: "nextprojecttarefa.firebaseapp.com",
  projectId: "nextprojecttarefa",
  storageBucket: "nextprojecttarefa.appspot.com",
  messagingSenderId: "23316782904",
  appId: "1:23316782904:web:b1a9f359c43fb3032b6bcd",
  measurementId: "G-GWJTD2MFMR"
};

// Initialize Firebase. Trocar a variável padrão 'app' por firebaseApp. Fica melhor.
//No caso aqui estou usando também o analytics ( const analytics = getAnalytics(app); ) vou trocar por 'db'
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };