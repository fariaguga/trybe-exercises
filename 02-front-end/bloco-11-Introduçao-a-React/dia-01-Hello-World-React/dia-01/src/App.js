import React from 'react';
import './App.css';
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const tasksArray = ['acordar', 'tocar', 'trybe', 'cochilo'];

function App() {
  const listaFinal = tasksArray.map((elemento) => Task(elemento));
  return (
    <div>
      <ul>{listaFinal}</ul>
    </div>
  );
}

export default App;
