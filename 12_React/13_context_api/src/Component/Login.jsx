import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {setUser} = useContext(UserContext)
  const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({username, password})
  }
  return (
    <div >
      <h2  className="text-center my-10 text-3xl bg-black text-white rounded-lg">Login</h2>
      <input 
      className="bg-black text-white rounded-lg mx-5 py-2 px-4"
      type="text" 
      placeholder='Enter You Username'
      value={username}
      onChange={(e)=> setUsername(e.target.value)}
      />
      {"     "}
      <input 
      className="bg-black text-white rounded-lg mx-5 py-2 px-4"
      type="text" 
      placeholder='Enter You Password'
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      />
      <button 
      className="bg-green-600 text-white w-20 h-10 rounded-md"
      onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login