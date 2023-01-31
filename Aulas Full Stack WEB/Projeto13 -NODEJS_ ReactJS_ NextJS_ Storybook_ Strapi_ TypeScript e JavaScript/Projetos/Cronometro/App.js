import React, {Component} from 'react';
import './style.css';

// Importando a imagem do cronometro
import cronometro from './assets/cronometro.png';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI'
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'VAI';
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1; 
        this.setState(state);
      },100);    // 1000 é 1 segundo

      state.botao = 'PAUSAR';
    }

    this.setState(state);
  }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'VAI';
    this.setState(state);

  }


  // {this.state.numero.toFixed(1)} 1 é a quantidade de casas decimais
  render(){
    return(
      <div className="container">
        
        <img src={cronometro} className="img" alt='' />
        <div className="timer"> {this.state.numero.toFixed(1)} </div>         
        <div className="areaBtn">
          <button className="botao" onClick={this.vai}>{this.state.botao}</button>
          <button className="botao" onClick={this.limpar}>LIMPAR</button>
        </div>
      </div>
    );
  }
}

export default App;