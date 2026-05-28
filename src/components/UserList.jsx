import React, { useEffect, useState } from 'react'
import {getAllUsers} from '../services/UserService.js'
import UserCard from './UserCard.jsx'
import LoadingMessage from './LoadingMessage.jsx'


function UserList({ searchQuery, setSelectedUser }) {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        getAllUsers()
        .then(data=>{
            setUsers(data);
            setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
        })
    }, [])

    if (isLoading) {
      return <LoadingMessage />
    }

    const normalizedQuery = searchQuery.trim().toLowerCase();
    const filteredUsers = users.filter((user) => {
      if (!normalizedQuery) return true;

      return [
        user.name,
        user.username,
        user.email,
        user.address?.city,
        user.company?.name,
      ]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(normalizedQuery));
    });

    return (
      <div className='flex flex-col gap-6 items-center w-full'>
        {filteredUsers.length === 0 ? (
          <p className='text-gray-600'>No users match your search.</p>
        ) : (
          <div className='flex flex-wrap gap-5 justify-center'>
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} setSelectedUser={setSelectedUser} />
            ))}
          </div>
        )}
      </div>
    )
}

export default UserList