
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SingIn from "../pages/SingIn/SingIn";
import SingUp from "../pages/SingUp/SingUp";
import RegisterLayout from "../components/RegisterLayout";
import Password from "../pages/SingUp/Password";
import Success from "../pages/SingUp/Success";
import Clients from '../pages/Clients/Clients'

function MainRoutes() {
  return (
    <Routes>
      <Route element={<RegisterLayout />} >
        <Route path="/singup" element={<SingUp />} />
        <Route path="/password" element={<Password />} />
        <Route path="/success" element={<Success />} />
      </Route>
      <Route path="/" element={<SingIn />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default MainRoutes;