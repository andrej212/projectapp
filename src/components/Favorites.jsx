import React, { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

function Favorites() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  if (favorites.length === 0) return null;

  return (
    <div className='mt-12'>
      <h2 className='text-2xl mb-4'>Favorites ({favorites.length})</h2>
      <div className='flex flex-col gap-3'>
        {favorites.map(user => (
          <div key={user.id} className='p-4 border rounded flex justify-between items-center bg-white'>
            <div>
              <p><strong>{user.name}</strong></p>
              <p>{user.email}</p>
              <p>{user.address.city}</p>
            </div>
            <button 
              onClick={() => removeFromFavorites(user.id)}  
              className='bg-red-500 text-white px-4 py-2 rounded'
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites