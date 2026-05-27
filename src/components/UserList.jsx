import React, { useEffect, useState } from 'react'
import {getAllUsers} from '../services/UserService.js'
import UserCard from './UserCard.jsx'
import LoadingMessage from './LoadingMessage.jsx'


function UserList({ setSelectedUser }) {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log("render", isLoading);
    
    useEffect(()=>{
        getAllUsers()
        .then(data=>{
            console.log(data);
            setUsers(data);
            setIsLoading(false);
            console.log("setting loading false");
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
        })
        
    }, [])

     if (isLoading) {
    return <LoadingMessage />
  }
    
    
  return (
    <div className='flex flex-wrap gap-5 justify-center'>
       {users.map(user => <UserCard key={user.id} user ={user} setSelectedUser={setSelectedUser}></UserCard>)}
    </div>
  )
}

export default UserList