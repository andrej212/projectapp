import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
    
      <h1 className="text-red-500">
        Hi
      </h1>
      <UserList setSelectedUser={setSelectedUser}/>
      {selectedUser && (
        <UserDetails user={selectedUser} />
      )}
    </>
  )
}

export default App
