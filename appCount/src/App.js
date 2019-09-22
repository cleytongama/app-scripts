import React, { useState, useEffect } from 'react';
import MostraVoltas from './MostraVoltas'
import MostraTempo from './MostraTempo'
import Button from './Button'

function App() {

  const [numVoltas, setNumVoltas] = useState(0)
  const [comecar, setComecar] = useState(false)
  const [tempo, setTempo] = use
  
  State(0)


  useEffect(() => {
    let timer = null
    if (comecar) {
      timer = setInterval(() => {
        setTempo(oldTempo => oldTempo + 1)
      }, 10)
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [comecar])

  const toogleComecar = () => {
    setComecar(!comecar)
  }

  const increment = () => {
    setNumVoltas(numVoltas + 1)
  }
  const decrement = () => {
    setNumVoltas(numVoltas - 1)
  }

  const reset = ()=>{
    setNumVoltas(0);
    setTempo(0);
    setComecar(false);
  }

  return (
    <div>
      <MostraVoltas voltas={numVoltas} />
      <Button text="+" onClick={increment} />
      <Button text="-" onClick={decrement} />

      {
        numVoltas > 0 && 
        <MostraTempo tempo={Math.floor(tempo/numVoltas)} />
      }
      <Button text="Iniciar" onClick={toogleComecar} />
      <Button text="Reiniciar" onClick={reset} />
    </div>
  );
}

export default App;
