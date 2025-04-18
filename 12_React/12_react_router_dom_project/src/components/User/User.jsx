import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {userid} = useParams();
  return (
    <div className='text-gray-300 text-3xl text-center bg-yellow-500'>User: {userid}</div>
  )
}

export default User