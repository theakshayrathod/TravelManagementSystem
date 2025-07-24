
import type { JSX } from 'react'

import { Home } from './Pages/Home'
import { UserRegistration } from './Pages/auth/user/Registration'
import { UserProfileUpdate } from './Pages/user/UpdateProfile'
import { OperatorProfileUpdate } from './Pages/operator/UpdateProfile'
import { AddBus } from './Pages/operator/AddBus'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/auth/Login'
import { Buses } from './Pages/operator/Buses'
import { OperatorDashboard } from './Pages/operator/Dashboad'
import { OperatorProfile } from './Pages/operator/Profile'
import { UserProfile } from './Pages/user/Profile'
import { OperatorRegistration } from './Pages/auth/operator/Registration'
import { AddSchedule } from './Pages/operator/AddSchedule'
import UserDashboard from './Pages/user/UserDashboard'
import { Schedule } from './Pages/operator/Schedule'
import { ForgotPassword } from './Pages/auth/ForgotPassword'
import { SearchResult } from './Pages/user/SerachResult'





function App(): JSX.Element {

  return (
    <>

      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='user-register' element={<UserRegistration />} />
        <Route path='operator-register' element={<OperatorRegistration />} />
        <Route path='forgot-password' element={<ForgotPassword />} />

        <Route path='home' element={<Home />} >
          
          {/* users Functionality */}
          <Route path='user' element={<UserDashboard />} />
          <Route path='update-user' element={<UserProfileUpdate />} />
          <Route path='user-profile' element={<UserProfile />} />
          <Route path='search-results' element={<SearchResult />} />


          {/* Operator Functionality */}
          <Route path='addbus' element={<AddBus />} />
          <Route path='add-schedule' element={<AddSchedule />} />
          <Route path='bus' element={<Buses />} />
          <Route path='operator' element={<OperatorDashboard />} />
          <Route path='update-operator' element={<OperatorProfileUpdate />} />
          <Route path='operator-profile' element={<OperatorProfile />} />
          <Route path='schedule' element={<Schedule/>} />

        </Route>
      </Routes>

    </>
  )
}

export default App
