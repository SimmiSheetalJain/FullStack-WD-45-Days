function App() {
  let counter = 15;

  const improve = ()=>{
    counter = counter + 1;
    console.log(`Counter is ${counter}`);
  }
  const degrade = ()=>{
    counter = counter - 1;
    console.log(`Counter is ${counter}`);
  }
  return (
    <>
    <h1>Let's Make Progress!</h1>
    <h2>Current Counter: {counter}</h2>
    <button onClick={improve}>Click if you improved today (1%)</button> 
    <br/>
    <br/>
    <button onClick={degrade}>Click if you slipped today (1%)</button>
    <p>Progress: {counter}%</p>
    <p>You're doing great! {counter}% shows your effort.</p>
    <p>Try clicking the buttons above.</p>
    <a href="https://drive.google.com/file/d/1Qo1QQ7Lg0wwuodlJy6eH_WDyFiVADPRf/view?usp=sharing" alt="Check the console while clicking buttons">View Sample Output</a>
    <p>As shown in the sample, the counter value does not update on the screen. To fix this, we need a way to refresh the UI — and that's where React Hooks come in!</p>
    </>
  )
}

export default App
