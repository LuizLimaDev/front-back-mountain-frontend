
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SingIn from "../pages/SingIn/SingIn";
import SingUp from "../pages/SingUp/SingUp";
import RegisterLayout from "../components/RegisterLayout";

function MainRoutes() {
  return (
    <Routes>
      <Route element={ <RegisterLayout /> } >
        <Route path="/" element={<SingUp />} />
      </Route>
        <Route path="/signin" element={<SingIn />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default MainRoutes;