import { useState, useCallback, useEffect, useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState();
    //useRef Hook
    const passRef = useRef(null);
  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "@#$&[]{}||<>()";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    } 
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  const copyPassword = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{passwordGen()},[length, charAllow, numAllow, passwordGen])

  return (
    <>
      <h1 className="text-3xl">Generate Secure and Safe OTP for Authentication</h1>
      <div className="w-full max-w-md shadow-md rounded-lg px-4 py-3 my-10 mx-auto text-orange-500 bg-gray-400">
        <h1 className="text-white text-center text-2xl my-5">OTP Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button 
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPassword}
            >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range" 
            min={5}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{
               setLength(e.target.value); 
            }}
            />
            <label> Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox" 
              defaultChecked={numAllow}
              id="numberInput"
              onChange={()=>{setNumAllow((prev)=>!prev)}}
              />
            <label>Number</label>
            <input 
              type="checkbox" 
              defaultChecked={charAllow}
              id="charInput"
              onChange={()=>{setCharAllow((prev)=>!prev)}}
              />
            <label>Special Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
