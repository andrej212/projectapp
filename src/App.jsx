import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'
import Header from './components/Header'

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
    
      <h1 className="text-red-500">
        Hi
      </h1>
      <Header />
      <UserList setSelectedUser={setSelectedUser}/>
      {selectedUser && (
        <div className="flex flex-col items-center mt-12">
          <h1>More info</h1>
        <UserDetails className='' user={selectedUser} />
        </div>
      )}
    </>
  )
}

export default App
