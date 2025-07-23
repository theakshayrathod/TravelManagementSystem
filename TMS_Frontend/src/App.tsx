
import type {JSX} from 'react'
import { Login } from './Pages/auth/Login'
// import { Home } from './Pages/Home'
import  Navbar  from './components/Navbar'
// import { OperatorRegistration } from './Pages/auth/operator/Registration'
// import { UserRegistration } from './Pages/auth/user/Registration'
// import { UserProfileUpdate } from './Pages/user/UpdateProfile'
// import { OperatorProfileUpdate } from './Pages/operator/UpdateProfile'
// import { Registration } from './Pages/auth/Registration'





function App():JSX.Element {

  return (
    <>



   <Navbar/>
    {/* <Home/> */}
<Login/>
    {/* <OperatorProfileUpdate/> */}
    {/* <UserProfileUpdate/> */}
    {/* <OperatorRegistration/> */}
    {/* <UserRegistration/> */}


    </>
  )
}

export default App
