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




function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/order", element: <OrderPage /> },
    { path: "/cart", element: <CartPage /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/login", element: <Login /> }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
