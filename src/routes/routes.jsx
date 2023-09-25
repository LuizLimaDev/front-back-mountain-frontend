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
import HomeLayout from "../components/HomeLayout";
import Billings from "../pages/Billings";
import ClientDetailed from "../pages/ClientDetailed/ClientDetailed";
import api from "../services/api";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function ProtectedRouteByLogout({ isProtected, url }) {
  return isProtected ? <Outlet /> : <Navigate to={url} />;
}

// eslint-disable-next-line react/prop-types
function ProtectedRouteByLogged({ isProtected, url, remove }) {
  useEffect(()=>{
    const fetchData = async () => {
      try {
        await api.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${isProtected}`
          }
        });
      } catch (error) {
        // Se ocorrer um erro ao buscar o perfil do usuário, redirecione para a rota especificada
        remove("token");
      }
    };

    if (isProtected) {
      fetchData();
    }
  },[isProtected, remove]);

  return isProtected ? <Outlet /> : <Navigate to={url} />;
}

function MainRoutes() {
  const { value, remove } = useContext(SingContext);


  return (
    <Routes>

      <Route
        element={<ProtectedRouteByLogout isProtected={!value} url={"/home"} />}
      >

        <Route element={<RegisterLayout />}>
          <Route path="/singup" element={<SingUp />} />
          <Route path="/password" element={<Password />} />
          <Route path="/success" element={<Success />} />
        </Route>
        <Route path="/" element={<SingIn />} />

      </Route>

      <Route element={<ProtectedRouteByLogged isProtected={value} url={"/"} remove={remove} />}>

        <Route element={<HomeLayout />} >
          <Route path="/home" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/:customerId" element={<ClientDetailed />} />
          <Route path="/billings" element={<Billings />} />
        </Route>
        
      </Route>

    </Routes >
  );
}

export default MainRoutes;
