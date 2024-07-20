// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <>
    <div className='flex justify-around items-center font-bold m-4 bg-neutral-200 rounded-md font-mono  text-orange-800 p-4 text-4xl'>
    <h1 className=''>Name: {data.name}</h1>
    <img className='rounded-md' src={data.avatar_url} alt="Git picture" width={300} />
    <h1>Github followers: 235{data.followers}</h1>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/this-is-hassy')
    return response.json()
}