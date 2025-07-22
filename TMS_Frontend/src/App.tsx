
import type {JSX} from 'react'
import { Login } from './Pages/auth/Login'
import { Home } from './Pages/Home'
import  Navbar  from './components/Navbar'
import { Registration } from './Pages/auth/Registration'





function App():JSX.Element {

  return (
    <>



   <Navbar/>
    <Home/>


    </>
  )
}

export default App
