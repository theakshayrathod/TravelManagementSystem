
import type {JSX} from 'react'
// import { Login } from './Pages/auth/Login'
// import { Home } from './Pages/Home'
import  Navbar  from './components/Navbar'
// import { UserProfileUpdate } from './Pages/user/UpdateProfile'
//import { OperatorProfileUpdate } from './Pages/operator/UpdateProfile'
import { AddTrip } from './Pages/operator/AddTrip'
// import { Registration } from './Pages/auth/Registration'





function App():JSX.Element {

  return (
    <>



   <Navbar/>
    {/* <Home/> */}
    {/* <OperatorProfileUpdate/> */}
    {/* <UserProfileUpdate/> */}
     <AddTrip/>


    </>
  )
}

export default App
