
import type {JSX} from 'react'
import { Login } from './Pages/auth/Login'
import { Home } from './Pages/Home'
import  Navbar  from './components/Navbar'







function App():JSX.Element {


  return (
    <>


   <Navbar/>
    <Home/>

      {/* <h1>Hello</h1> */}


    </>
  )
}

export default App
