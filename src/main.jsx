import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './screens/HomePage'
import NotFound from './screens/NotFoundPage'
import MenuPage from './screens/MenuPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <NotFound/>,
  },
  {
    path: '/menu',
    element: <MenuPage/>,
    errorElement: <NotFound/>,
  },
  // {
  //   path: '/catering',
  //   element: <CateringPage/>,
  //   errorElement: <NotFound/>,
  // },
  // {
  //   path: '/reviews',
  //   element: <ReviewsPage/>,
  //   errorElement: <NotFound/>,
  // },
  // {
  //   path: '/aboutus',
  //   element: <AboutUsPage/>,
  //   errorElement: <NotFound/>,
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
