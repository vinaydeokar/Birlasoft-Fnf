import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    console.log("clicked", counter)
    //counter = counter + 1
    //setCounter(counter+1)
    //watch "A react interview question on counter" from "Chai & React" series of Hitesh Chaudhary
    setCounter(PrevCounter=>PrevCounter+1)
    setCounter(PrevCounter=>PrevCounter+1)
    setCounter(PrevCounter=>PrevCounter+1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App