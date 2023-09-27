import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn/index";
import SignUp from "../pages/SignUp/index";
import RegisterLayout from "../components/Layouts/RegisterLayout/index";
import Password from "../pages/SignUp/Password";
import Success from "../pages/SignUp/Success";
import { useContext } from "react";
import { SingContext } from "../context/SingContext";
import Clients from '../pages/Clients';
import HomeLayout from "../components/Layouts/HomeLayout/index";
import Billings from "../pages/Billings";
import ClientDetailed from "../pages/ClientDetailed";
import api from "../services/api";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function ProtectedRouteByLogout({ isProtected, url }) {
  return isProtected ? <Outlet /> : <Navigate to={url} />;
}

// eslint-disable-next-line react/prop-types
function ProtectedRouteByLogged({ isProtected, url, remove }) {
  useEffect(() => {
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
  }, [isProtected, remove]);

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
          <Route path="/singup" element={<SignUp />} />
          <Route path="/password" element={<Password />} />
          <Route path="/success" element={<Success />} />
        </Route>
        <Route path="/" element={<SignIn />} />

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
