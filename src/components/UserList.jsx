import React, { useEffect, useState } from 'react'
import {getAllUsers} from '../services/UserService.js'
import UserCard from './UserCard.jsx'


function UserList() {

    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        getAllUsers()
        .then(data=>{
            console.log(data);
            setUsers(data);
        })
        .catch(err => console.log(err))
    }, [])
    
  return (
    <div className='flex flex-wrap gap-5 justify-center'>
       {users.map(user => <UserCard key={user.id} user ={user}></UserCard>)}
    </div>
  )
}

export default UserList