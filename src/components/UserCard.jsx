import React from 'react'

function UserCard({user, setSelectedUser }) {



  return (
    <div className='w-[280px] p-5 border rounded-xl shadow-md flex flex-col gap-2 bg-white hover:shadow-lg transition'>
        <p>NAME:  {user.name}</p>
        <p>MAIL:  {user.email}</p>
        <p>CITY:  {user.address.city}</p>
        <p>COMPANY:  {user.company.name}</p>
        //here i had some issue with onClick = setselecteduser because of rendering
        <button onClick={() => setSelectedUser(user)}  className='bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition'>wiev more</button>
        <button  className='bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition'>Add to favourites</button>
    </div>
  )
}

export default UserCard