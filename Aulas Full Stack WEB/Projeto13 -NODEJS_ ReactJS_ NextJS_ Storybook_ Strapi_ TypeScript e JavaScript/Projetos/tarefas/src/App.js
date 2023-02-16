
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//No site diz para importar o css do ToastContainer:
//      https://fkhadra.github.io/react-toastify/introduction
//      https://fkhadra.github.io/react-toastify/installation



export default function App() {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={3000}/>
      <RoutesApp/>    
    </BrowserRouter>
  )
}


