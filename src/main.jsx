import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ContactUs from './kridchasorn/Contact.jsx'
import AboutUs from './kridchasorn/AboutUs.jsx'
import Booking from './thanachot/Booking.jsx'
import Profilecard from './peeraya/Profile.jsx'
import TrainerDetails from './chakrit/TrainerDetails.jsx'
import Login from './chakrit/Login.jsx'
import './index.css'


const router = createBrowserRouter([
  {path:'/', element:<App/>},
  {path:'/contact-us', element:<ContactUs/>},
  {path:'/about-us', element:<AboutUs/>},
  {path:'/booking', element:<Booking/>},
  {path:'/profile', element:<Profilecard/>},
  {path:'/coach', element:<TrainerDetails/>},
  {path:'/login', element: <Login/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)