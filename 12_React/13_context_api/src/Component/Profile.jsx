import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
  const {user} = useContext(UserContext);
  if (!user) return <div className="bg-yellow-200 text-black text-center">User couldn't be found</div>
  return <div className="bg-yellow-200 text-black text-center">Hi {user.username}!!</div>
}

export default Profile