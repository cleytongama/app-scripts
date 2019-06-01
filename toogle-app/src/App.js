import React, { useState } from 'react';
import './App.css'

const Toogle = ({ defaultValue, onChange }) => {
  
  const [checked, setChecked] = useState(!!defaultValue)

  const onToggle =()=>{
    setChecked(!checked)

    if(onChange){
      onChange(!checked)
    }
  }
  const style = !checked ? 'toogle' : 'toogle toogle-checked'

  return <div className={style} onClick={onToggle}></div>
}

function App() {

  const [checked2, setChecked2] = useState(false)

  return (
    <div className="App" >
      <Toogle defaultValue />
      <Toogle onChange={value => setChecked2(value)} />
      {JSON.stringify(checked2)}
    </div>
  )
}

export default App
