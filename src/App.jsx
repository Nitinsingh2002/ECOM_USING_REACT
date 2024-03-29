import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import * as bootstrap from 'bootstrap'
import { Home } from './page/HomePage/Home'
import CartPage from './page/CartPage/cartPage'
import OrderPage from './page/OrderPage/OrderPage'
import SignUp from './component/signUp/signUp'
import Login from './component/LogIn/LogIn'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { NotFound } from './page/NotFound/notFound'
import { Alert } from './component/alert/alert'




function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/order", element: <OrderPage /> },
    { path: "/cart", element: <CartPage /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/login", element: <Login /> },
    { path: "*", element: <NotFound/> }
  ])

  return (
    <>
      <RouterProvider router={router}>
       <Alert/>
      </RouterProvider>
     
    </>
  )
}

export default App
