import { useState } from "react";

export function Imagen() {
  const puerta = ['abierto.png', 'cerrado.png'];

  const [abrir, setAbrir] = useState(true); //true para abierto y false para cerrado

  const abrirPuerta = () => {
    setAbrir(true);
  };

  const cerrarPuerta = () => {
    setAbrir(false);
  };

  return (
    <div>
      <h1>Puertas</h1>
      <p>
        <img
          src={process.env.PUBLIC_URL + "/imagenes/" + puerta[abrir ? 0 : 1]} alt="Puerta"
          style={{ width: "300px" }}
        />
      </p>
      <p>
        <input type="button" value="Abrir" onClick={abrirPuerta} />
        <input type="button" value="Cerrar" onClick={cerrarPuerta} />
        {abrir ? puerta[0] : puerta[1]}
      </p>
    </div>
  );
}
