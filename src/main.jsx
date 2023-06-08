import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './Pages/Home/Home.jsx'
import ErrorElement from './Pages/ErrorElement/ErrorElement'
import Login from './AuthenticationPages/Login/Login'
import Register from './AuthenticationPages/Register/Register'
import AuthProvider from './Providers/AuthProvider'
import Dashboard from './Layouts/Dashboard'
import MySelectedClass from './Pages/Dashboard/Student/MySelectedClass/MySelectedClass'
import MyEnrolledClass from './Pages/Dashboard/Student/MyEnrolledClass/MyEnrolledClass'
import AddClass from './Pages/Dashboard/Instructor/AddClass/AddClass'
import MyClasses from './Pages/Dashboard/Instructor/MyClasses/MyClasses'
import ManageClasses from './Pages/Dashboard/Admin/ManageClasses/ManageClasses'
import ManageUsers from './Pages/Dashboard/Admin/ManageUsers/ManageUsers'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'selectedclass',
        element: <MySelectedClass></MySelectedClass>
      },
      {
        path: 'enrolledclass',
        element: <MyEnrolledClass></MyEnrolledClass>
      },
      // instructor route
      {
        path: 'addclass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myclasses',
        element: <MyClasses></MyClasses>
      },
      //Admin route
      {
        path: 'manageclasses',
        element: <ManageClasses></ManageClasses>
      },
      {
        path: 'manageusers',
        element: <ManageUsers></ManageUsers>
      }
    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
