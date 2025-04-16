import './App.css'

// Importing the useState hook from React
import { useState } from 'react';  

// The useState hook allows functional components to have state.
// It returns an array with two elements:
// [0] - the current state value
// [1] - a function to update that value
// You can name these variables anything, but following standard naming conventions improves readability.

function App() {

  let [counter, setCounter] = useState(15);  // Initial state is set to 15. It can be any value.

  const improve = () => {
    // We update the value using setCounter to ensure the UI re-renders with the new value
    setCounter(counter + 1); 
    console.log(`Counter is ${counter + 1}`);
  }

  const degrade = () => {
    setCounter(counter - 1);
    console.log(`Counter is ${counter - 1}`);
  }

  return (
    <>
      <h1>Let's Make Progress!!</h1>
      <h4>A Law from IKIGAI</h4>
      <h2>Current Progress %: {counter}</h2>
      <button onClick={improve}>Click if you improved today (1%)</button> 
      <br />
      <br />
      <button onClick={degrade}>Click if you slipped today (1%)</button>
      <p>Progress: {counter}%</p>
      <p>You're doing great! {counter}% shows your effort.</p>
      <p>Try clicking the buttons above.</p>
    </>
  )
}

export default App;
