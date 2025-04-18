import { useState} from 'react'
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
  const [amt, setAmt] = useState(0);
  const [from, setFrom]=useState("usd");
  const [To, setTo]=useState("inr");
  const [res, setRes]=useState(0);
  const currInfo = useCurrencyInfo(from);
  const options = Object.keys(currInfo);
  const swap = ()=>{
    setTo(from)
    setFrom(To)
    setRes(amt)
    setAmt(res)
  }
  const convert = ()=>{
    setRes(amt*currInfo[To]);
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount = {amt}
                            currencyOptions = {options}
                            onCurrencyChange = {(currency)=>(setAmt(amt))}
                            selectCurrency={from}
                            onAmtChange={(amt)=>(setAmt(amt))}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={res}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>(setTo(currency))}
                            selectCurrency={To}
                            amountDisable                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {To.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App    
