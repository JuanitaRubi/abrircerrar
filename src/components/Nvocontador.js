import { useState } from "react";

export function Nvocontador() {
  const [cuenta, setCuenta] = useState(0);

  function aumentar() {
    if (cuenta < 100) {
      setCuenta(cuenta + 1);
    }
  }

  function disminuir() {
    if (cuenta > 0) {
      setCuenta(cuenta - 1);
    }
  }

  function resetear() {
    setCuenta(0);
  }

  return (
    <>
      <div>{cuenta}</div>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
      <button onClick={resetear}>Resetear</button>
    </>
  );
}
