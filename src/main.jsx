import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ContactUs from './kridchasorn/Contact.jsx'
import AboutUs from './kridchasorn/AboutUs.jsx'
import ProfileComponent from './peeraya/Profile.jsx'
import TrainerDetails from './chakrit/TrainerDetails.jsx'

import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ContactUs from './kridchasorn/Contact.jsx'
import AboutUs from './kridchasorn/AboutUs.jsx'

import './index.css'
import Booking from './thanachot/Booking.jsx'


const router = createBrowserRouter([
  {path:'/', element:<Booking />},
  // {path:'/contact-us', element:<ContactUs/>},
  // {path:'/about-us', element:<AboutUs/>},
  // {path:'/booking', element:<Booking/>},
  // {path:'/profile', element:<ProfileComponent/>},
  // {path:'/coach', element:<TrainerDetails/>},
])


const router = createBrowserRouter([
  {path:'/', element:<App/>},
  {path:'/contact-us', element:<ContactUs/>},
  {path:'/about-us', element:<AboutUs/>},
  {path:'/booking', element:''},
  {path:'/profile', element:''},
  {path:'/coach', element:''},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
