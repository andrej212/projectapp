import React from 'react'

function UserDetails({user}) {
  return (
    <div className='w-[280px] p-5 border rounded-xl shadow-md flex flex-col gap-2 bg-white hover:shadow-lg transition'>
      <h1>Details about {user.name} with id {user.id}</h1>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </div>
  )
}

export default UserDetails