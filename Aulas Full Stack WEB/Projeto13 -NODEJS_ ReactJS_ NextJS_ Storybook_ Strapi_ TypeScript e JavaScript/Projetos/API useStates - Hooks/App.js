import React, { useState } from 'react';


//tarefas, é o primeiro parâmetro da state, o nome dela, e o segundo parâmetro, é a função que vai chamar para atualizar op valor da state

function App() {

  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ]);
  const [input, setInput] = useState('');

  function handleAdd(){
    setTarefas([...tarefas, input]) // lembrando que em JS os 3 pontos é para chamar tudo que tiver
    setInput('');
  }

const [nome, setNome] = useState('Leandro');

  return (
    <div>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <h4>Nome: {nome}</h4>

      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>    
      <button type="button" onClick={handleAdd}>Adicionar</button>

    </div>
  );
}

export default App;