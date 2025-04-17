import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AllEvents from "./components/AllEvents.Jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-2.5 rounded-3xl mb-1.5">
        Welcome to Karykram
      </h1>
      <AllEvents></AllEvents>
    </>
  );
}

export default App;
