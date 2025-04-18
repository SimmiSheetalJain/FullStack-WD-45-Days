import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData();
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/simmisheetaljain')
  //   .then((res)=>res.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   })
  // },[]);
  return (
    <>
    <div className='text-center m-4 bg-green-600 text-white-300 text-4xl'>Github Followers: {data.followers}
    </div>
    <center><img src={data.avatar_url} alt="" /></center>
    </>
  )
}

export default Github

export const GithubInfo = async () => {
  const response = await fetch('https://api.github.com/users/simmisheetaljain')
  return response.json()
}