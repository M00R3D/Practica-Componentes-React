import React from 'react';
import logo from './logo.svg';
import './App.css';
import Receta from './Receta'; // Importamos el componente Receta

function App() {
  // Creamos una lista de objetos de recetas
  const recetas = [
    {
      nombre: "Tarta de Manzana",
      ingredientes: ["manzanas", "azúcar", "harina", "mantequilla"],
      tiempo: "1 hora"
    },
    {
      nombre: "Sopa de Tomate",
      ingredientes: ["tomates", "cebolla", "ajo", "caldo de verduras"],
      tiempo: "30 minutos"
    },
    {
      nombre: "Ensalada César",
      ingredientes: ["lechuga romana", "pollo", "crutones", "salsa César"],
      tiempo: "20 minutos"
    }
    // Agrega más recetas si lo deseas
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recetas de Cocina</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {/* Iteramos sobre la lista de recetas y renderizamos un componente Receta para cada una */}
        {recetas.map((receta, index) => (
          <Receta key={index} nombre={receta.nombre} ingredientes={receta.ingredientes} tiempo={receta.tiempo} />
        ))}
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
