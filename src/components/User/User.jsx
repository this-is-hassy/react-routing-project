import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-zinc-600 text-center text-white text-3xl p-4 m-10'>USER : {userid}</div>
  )
}

export default User