import React, { createContext, useState } from 'react'

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (user) => {
    if (!favorites.find(fav => fav.id === user.id)) {
      setFavorites([...favorites, user]);
    }
  };

  const removeFromFavorites = (userId) => {
    setFavorites(favorites.filter(fav => fav.id !== userId));
  };

  const isFavorite = (userId) => {
    return favorites.some(fav => fav.id === userId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
