import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ContactUs from './kridchasorn/Contact.jsx'
import AboutUs from './kridchasorn/AboutUs.jsx'
import UserProfile from './peeraya/Profile.jsx'
import Profile2 from './peeraya/Profile2.jsx'
import TrainerDetails from './chakrit/TrainerDetails.jsx'

import './index.css'
import Booking from './thanachot/Booking.jsx'


const router = createBrowserRouter([
  {path:'/', element:<App/>},
  {path:'/contact-us', element:<ContactUs/>},
  {path:'/about-us', element:<AboutUs/>},
  {path:'/booking', element:<Booking />},
  {path:'/profile2', element:<Profile2 />},
  {path:'/coach', element:''},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
