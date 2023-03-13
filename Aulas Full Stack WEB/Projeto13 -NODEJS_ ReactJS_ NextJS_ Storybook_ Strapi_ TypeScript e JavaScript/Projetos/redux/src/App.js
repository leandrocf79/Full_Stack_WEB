import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';

//onde será feita a navegação
import history from './services/history';

export default function App() {    // history={ history } apresentou erro na página
  return (
    <Provider  store={store} >

        <Router history={ history }>

          <Header/>
          <Routes />
        </Router>
    </Provider>  
  );
}


