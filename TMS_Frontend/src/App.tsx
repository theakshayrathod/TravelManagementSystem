
import type { JSX } from 'react'
// import { Login } from './Pages/auth/Login'
import { Home } from './Pages/Home'
import Navbar from './components/Navbar'
import { OperatorRegistration } from './Pages/auth/operator/Registration'
import { UserRegistration } from './Pages/auth/user/Registration'
import { UserProfileUpdate } from './Pages/user/UpdateProfile'

import { OperatorProfileUpdate } from './Pages/operator/UpdateProfile'
import { AddTrip } from './Pages/operator/AddTrip'


import {AddBus} from './Pages/operator/AddBus'



import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/auth/Login'

import { UserDashboard } from './Pages/user/UserDashboard'

import { Buses } from './Pages/operator/Buses'
import { OperatorDashboard } from './Pages/operator/Dashboad'





function App(): JSX.Element {

  return (
    <>

      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='register' element={<UserRegistration />} />

        <Route path='home' element={<Home />} >

          <Route path='user' element={<UserDashboard />} />
          <Route path='addbus' element={<AddBus/>} />
          <Route path='bus' element={<Buses/>} />
          <Route path='operator' element={<OperatorDashboard/>} />
          <Route path='update-operator' element={<OperatorProfileUpdate/>} />
          <Route path='update-user' element={<UserProfileUpdate/>} />

          

          
          



        </Route>



      </Routes>

    </>
  )
}

export default App
