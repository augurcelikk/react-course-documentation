import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Dashboard } from './pages/Dashboard'
import { Products } from './pages/Products'
import { Login } from './pages/Login'
import viteLogo from '/vite.svg'
import './App.css'

import { Layout } from './components/Layout'

import { Logo } from './components/Logo'
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav'
import { UserContext } from './contexts/UserContext';
import { useNavigate } from 'react-router-dom'

function App() {

  const [user, setUser] = useState({ isAllowed: false });

  const navigate = useNavigate();

  function logUserIn() {

    setUser({ isAllowed: true });
    navigate("/admin");

  }


  function logUserOut() {
    setUser({ isAllowed: false });
  }


  return (
    <>
      <UserContext.Provider value={user}>
        <header>
          <Logo />

          <Nav />

          { user.isAllowed && <button onClick={logUserOut}>Çıkış yap</button> }
        </header>
        <main>
          <Routes >
            <Route path="/admin" element={<Layout />} >
              <Route path="" element={<Dashboard />} />
              <Route path="ürünler" element={<Products />} />
            </Route>

            <Route path="/login" element={<Login logUserIn={logUserIn} />} />

          </Routes>
        </main>
        <footer>F</footer>
      </UserContext.Provider>
    </>
  )
}

export default App
