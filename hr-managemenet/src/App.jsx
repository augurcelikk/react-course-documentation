import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Products } from './pages/Products'
import { Logo } from './components/Logo'
import { Nav } from './components/Nav'
import {Routes,Route} from 'react-router'
import { ProtectedRoute } from './pages/ProtectedRoute'
import { AuthContextProvider } from './context/AuthContext'
import { Greeting } from './components/Greeting'
import { Employee } from './pages/Employee'


function App() {

  

  return (
    <AuthContextProvider>
      <header>
        <Logo />
        <Nav />
        <Greeting/>
       
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProtectedRoute/>} >
            <Route path=""element={<Employee/>} />
            <Route path="admin/ürünler"element={<Products />} />
          </Route>
          
          <Route path="/login"element={<Login />} />
        </Routes>
        
        
        
      </main>
      <footer>
        <p>Her hakkı saklıdır @ Java-11 HR-Management Application</p>
      </footer>

    </AuthContextProvider>
  )
}

export default App
