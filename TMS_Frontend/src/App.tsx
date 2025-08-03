
import type { JSX } from 'react'

import { UserRegistration } from './Pages/auth/user/Registration'
import { UserProfileUpdate } from './Pages/user/UpdateProfile'
import { OperatorProfileUpdate } from './Pages/operator/UpdateProfile'
import { AddBus } from './Pages/operator/AddBus'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/auth/Login'
import { Buses } from './Pages/operator/Buses'
import { OperatorDashboard } from './Pages/operator/OperatorDashboad'
import { OperatorProfile } from './Pages/operator/Profile'
import { UserProfile } from './Pages/user/Profile'
import { OperatorRegistration } from './Pages/auth/operator/Registration'
import { AddSchedule } from './Pages/operator/AddSchedule'
import UserDashboard from './Pages/user/UserDashboard'
import { Schedule } from './Pages/operator/Schedule'
import { ForgotPassword } from './Pages/auth/ForgotPassword'
import { SearchResult } from './Pages/user/SearchResult'
import { BookingSummary } from './Pages/user/BookingSummary'
import { Bookings } from './Pages/operator/Bookings'
import { ToastContainer } from 'react-toastify'
import { BookingView } from './Pages/user/BookingView'
import MyBookings from './Pages/user/MyBookings'
import { BookPickAndDrop } from './Pages/user/BookPickAndDrop'
import { UserHome } from './Pages/user/UserHome'
import { OperatorHome } from './Pages/operator/OperatorHome'
import { PickupAndDropPoints } from './Pages/operator/PickupAndDropPoints'
import AddedRoutes from './Pages/operator/AddRoutes'
import { SeatSelection } from './Pages/user/SeatSelection'
import { Addpoints } from './Pages/operator/AddPoints'





function App(): JSX.Element {

  return (
    <>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='user-register' element={<UserRegistration />} />
        <Route path='operator-register' element={<OperatorRegistration />} />
        <Route path='forgot-password' element={<ForgotPassword />} />

        {/* User */}
        <Route path='user' element={<UserHome />} >
          {/* users Functionality */}
          <Route path='dashboard' element={<UserDashboard />} />
          <Route path='update-user' element={<UserProfileUpdate />} />
          <Route path='user-profile' element={<UserProfile />} />
          <Route path='search-results' element={<SearchResult />} />
          <Route path='booking-summary' element={<BookingSummary />} />
          <Route path='booking-view' element={<BookingView />} />
          <Route path='my-booking' element={<MyBookings />} />
          <Route path='pickup-drop' element={<BookPickAndDrop />} />
          <Route path='seat-selection' element={<SeatSelection />} />
          
        </Route>
        {/* Operator */}
        <Route path='operator' element={<OperatorHome />} >
          {/* operator Functionality */}
          <Route path='dashboard' element={<OperatorDashboard />} />
          <Route path='update-profile' element={<OperatorProfileUpdate />} />
          <Route path='profile' element={<OperatorProfile />} />
          <Route path='add-bus' element={<AddBus />} />
          <Route path='buses' element={<Buses />} />
          <Route path='add-schedule' element={<AddSchedule />} />
          <Route path='schedule' element={<Schedule />} />
          <Route path='bookings' element={<Bookings />} />
          <Route path='pickup-drop' element={<PickupAndDropPoints />} />
          <Route path='add-route' element={<AddedRoutes />} />
          <Route path='add-pick-drop' element={<Addpoints />} />

        </Route>
      </Routes>

      <ToastContainer />
    </>
  )
}

export default App
