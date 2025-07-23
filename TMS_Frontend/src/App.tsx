

import type {JSX} from 'react'
//import { Login } from './Pages/auth/Login'
// import { Home } from './Pages/Home'
import  Navbar  from './components/Navbar'
import { Bookings } from './Pages/operator/Bookings'
// import { OperatorRegistration } from './Pages/auth/operator/Registration'
// import { UserRegistration } from './Pages/auth/user/Registration'
// import { UserProfileUpdate } from './Pages/user/UpdateProfile'

//import { OperatorProfileUpdate } from './Pages/operator/UpdateProfile'
//import { AddTrip } from './Pages/operator/AddTrip'
import type { JSX } from 'react'
import { Home } from './Pages/Home'
import { UserRegistration } from './Pages/auth/user/Registration'
import { UserProfileUpdate } from './Pages/user/UpdateProfile'

import { OperatorProfileUpdate } from './Pages/operator/UpdateProfile'




// import { Registration } from './Pages/auth/Registration'
//import {AddBus} from './Pages/operator/AddBus'

import {AddBus} from './Pages/operator/AddBus'



import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/auth/Login'


import { Buses } from './Pages/operator/Buses'
import { OperatorDashboard } from './Pages/operator/Dashboad'
import { OperatorProfile } from './Pages/operator/Profile'
import { UserProfile } from './Pages/user/Profile'
import { OperatorRegistration } from './Pages/auth/operator/Registration'
import { AddSchedule } from './Pages/operator/AddSchedule'
import UserDashboard from './Pages/user/UserDashboard'





function App(): JSX.Element {

  return (
    <>

      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='user-register' element={<UserRegistration />} />
        <Route path='operator-register' element={<OperatorRegistration />} />

        <Route path='home' element={<Home />} >

          <Route path='user' element={<UserDashboard/>} />
          <Route path='addbus' element={<AddBus/>} />
          <Route path='add-schedule' element={<AddSchedule/>} />
          <Route path='bus' element={<Buses/>} />
          <Route path='operator' element={<OperatorDashboard/>} />
          <Route path='update-operator' element={<OperatorProfileUpdate/>} />
          <Route path='update-user' element={<UserProfileUpdate/>} />
          <Route path='operator-profile' element={<OperatorProfile/>} />
          <Route path='user-profile' element={<UserProfile/>} />


          

          
          



        </Route>


    {/* <OperatorProfileUpdate/> */}
    {/* <UserProfileUpdate/> */}
   
    {/* <OperatorProfileUpdate/> */}
    {/* <UserProfileUpdate/> */}
    {/* <OperatorRegistration/> */}
    {/* <UserRegistration/> */}
    



      </Routes>

    </>
  )
}

export default App
