import React from 'react';
function Receta(props) {
  const { nombre, ingredientes, tiempo } = props;
  return (
    <div className="receta">
      <h2>{nombre}</h2>
      <p>Ingredientes:</p>
      <ul>
        {/* Iteramos sobre la lista de ingredientes y los mostramos como elementos de lista */}
        {ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      <p>Tiempo de preparación: {tiempo}</p>
    </div>
  );
}
export default Receta;
