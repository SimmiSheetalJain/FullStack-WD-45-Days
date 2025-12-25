import { useState } from "react";

function SetCounterCallBack({ curr_counter }) {
  const [counter, makeJump] = useState(curr_counter);
  const jump = () => {
    makeJump((counter) => counter + 1);
    makeJump((counter) => counter + 1);
    makeJump((counter) => counter + 1);
    makeJump((counter) => counter + 1);
    console.log(`Counter is ${counter}`);
  };

  return (
    <>
      <h1>Try it After Understanding the Need of Hooks and How Hooks Work!</h1>
      <h2>Current Counter: {counter}</h2>
      <button onClick={jump}>Jump</button>
      <p>Progress: {counter}%</p>
      <p>You're doing great! {counter}% shows your effort.</p>
    </>
  );
}

export default SetCounterCallBack;
