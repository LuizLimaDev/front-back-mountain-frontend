
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login"
import SingUp from "../pages/SingUp/SingUp"
import Home from "../pages/Home/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/singup",
    element: <SingUp />
  },
  {
    path: "/home",
    element: <Home />
  },
])

export default router