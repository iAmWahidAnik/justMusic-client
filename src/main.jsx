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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Payment from './Pages/Dashboard/StudentPayment/Payment'
import MyPaymentHistory from './Pages/Dashboard/Student/MyPaymentHistory/MyPaymentHistory'
import Instructors from './Pages/Instructors/Instructors'
import Classes from './Pages/Classes/Classes'
import DashboardLanding from './Pages/Dashboard/DashboardLanding/DashboardLanding'
import StudentRoute from './Routes/studentRoute'
import InstructorRoute from './Routes/InstructorRoute'
import AdminRoute from './Routes/AdminRoute'

const queryClient = new QueryClient();

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
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '',
        element: <DashboardLanding></DashboardLanding>
      },
      {
        path: 'selectedclass',
        element: <StudentRoute><MySelectedClass></MySelectedClass></StudentRoute>,
      },
      {
        path: 'enrolledclass',
        element: <StudentRoute><MyEnrolledClass></MyEnrolledClass></StudentRoute>
      },
      {
        path: 'payment/:price/:email/:classId',
        element: <StudentRoute><Payment></Payment></StudentRoute>
      },
      {
        path: 'paymenthistory',
        element: <StudentRoute><MyPaymentHistory></MyPaymentHistory></StudentRoute>
      },
      // instructor route
      {
        path: 'addclass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: 'myclasses',
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      //Admin route
      {
        path: 'manageclasses',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: 'manageusers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
