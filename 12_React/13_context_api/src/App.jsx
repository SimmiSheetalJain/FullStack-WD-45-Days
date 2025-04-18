import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {
  return (
    <UserContextProvider>
      <h1 className='text-fuchsia-700 text-center text-ellipsis text-3xl'>Welcome To Karyakram</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
