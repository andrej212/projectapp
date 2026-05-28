import React, { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

function UserCard({user, setSelectedUser }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useContext(FavoritesContext);

  const handleFavoriteToggle = () => {
    if (isFavorite(user.id)) {
      removeFromFavorites(user.id);
    } else {
      addToFavorites(user);
    }
  };

  return (
    <div className='w-[280px] p-5 border rounded-xl shadow-md flex flex-col gap-2 bg-white'>
        <p>NAME:  {user.name}</p>
        <p>MAIL:  {user.email}</p>
        <p>CITY:  {user.address.city}</p>
        <p>COMPANY:  {user.company.name}</p>
        <button onClick={() => setSelectedUser(user)} className='bg-red-500 text-white py-2 rounded-lg'>view more</button>
        <button onClick={handleFavoriteToggle} className='bg-red-500 text-white py-2 rounded-lg'>
          {isFavorite(user.id) ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
    </div>
  )
}

export default UserCard