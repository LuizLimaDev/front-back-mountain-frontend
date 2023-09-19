import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import SingIn from "../pages/SingIn/SingIn";
import SingUp from "../pages/SingUp/SingUp";
import RegisterLayout from "../components/RegisterLayout";
import Password from "../pages/SingUp/Password";
import Success from "../pages/SingUp/Success";
import { useContext } from "react";
import { SingContext } from "../context/SingContext";
import Clients from '../pages/Clients/Clients';

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ isProtected, url }) {
  return isProtected ? <Outlet /> : <Navigate to={url} />;
}

function MainRoutes() {
  const { value } = useContext(SingContext);

  return (
    <Routes>
      <Route
        element={<ProtectedRoute isProtected={!value} url={"/home"} />}
      >
        <Route element={<RegisterLayout />}>
          <Route path="/singup" element={<SingUp />} />
          <Route path="/password" element={<Password />} />
          <Route path="/success" element={<Success />} />
        </Route>
        <Route path="/" element={<SingIn />} />
      </Route>

      <Route element={<ProtectedRoute isProtected={value} url={"/"} />}>
        <Route path="/home" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
