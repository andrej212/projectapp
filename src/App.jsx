import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'
import Header from './components/Header'
import Favorites from './components/Favorites'
import { FavoritesProvider } from './context/FavoritesContext'

function AppContent() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} />
      <UserList searchQuery={searchQuery} setSelectedUser={setSelectedUser} />
      
      {selectedUser && (
        <div className="flex flex-col items-center mt-12">
          <h1>More info</h1>
          <UserDetails className='' user={selectedUser} />
        </div>
      )}
      
      <Favorites />
    </>
  )
}

function App() {
  return (
    <FavoritesProvider>
      <AppContent />
    </FavoritesProvider>
  )
}

export default App
