import React from 'react'

function UserCard({user}) {
  return (
    <div className='w-[280px] p-5 border rounded-xl shadow-md flex flex-col gap-2 bg-white hover:shadow-lg transition'>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
        <p>{user.company.name}</p>
        <button className='bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition'>Add to favourites</button>
    </div>
  )
}

export default UserCard