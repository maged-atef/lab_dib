

import Login from "./Components/Login/Login"
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Components/Home/Home"
import Layout from "./Components/Layout/Layout"
import Protected from "./Components/Protected/Protected"

const route = createBrowserRouter([
  {path:"/", element: <Home /> },
  {path:"login", element: <Login /> },
  {path:"layout", element:<Protected><Layout /></Protected>  },
])

function App() {


  return <RouterProvider router={route}>

  </RouterProvider>

}

export default App