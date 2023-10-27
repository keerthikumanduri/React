import { useState } from 'react' // this is the useState hook that we imported from react.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { // default app function over entire page.

const [counter, setCounter] = useState(0) // this is how we use useState hook , Whatever we put inside the useState() will be out initial value, now this useStates returns an array that has 2 properties they are a variable (here counter) and a function (here setCounter). Whatever value we use inside the useState is sent inside the counter and then the setCounter performs the operation we want it to do by defining some other condition like below.

const addValue = () => { // here we created an addValue to add the value on the counter and used the setCounter function to increase that value by one.
  if (counter<20){
    setCounter(counter + 1)
  }
}

const removeValue = () => {
  if (counter > 0) {
    setCounter(counter - 1)
  }
}

  return (
    <>
      <h1>This is React Hooks</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button> 
    </>
  ) // here we did some basic html layout.
}

export default App
