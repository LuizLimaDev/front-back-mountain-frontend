import { useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import billingIcon from '../../../../assets/Menu/Billing-button.png';
import clientsIcon from '../../../../assets/Menu/Clients-button.png';
import homeIconActive from '../../../../assets/Menu/Home-button.png';
import homeIconDefault from '../../../../assets/Menu/Home-button_default.png';
import clientsIconActive from '../../../../assets/Menu/clients_active.icon.png';
import billingIconActive from '../../../../assets/Menu/billings_active.svg';
import { SingContext } from '../../../../context/SingContext';
import './style.css';
import useCharges from "../../../../hooks/useCharges";
import useCustomers from "../../../../hooks/useCustomers";


// eslint-disable-next-line react/prop-types
function MenuIcon() {

  const { active, setActive } = useContext(SingContext)
  const { setChargesParams } = useCharges();
  const { setCustomersParams } = useCustomers();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/clients') {
      setActive('clients');
    } else if (location.pathname.match(/^\/clients\//)) {
      setActive('clientDetail');
    } else if (location.pathname === '/home') {
      setActive('home');
    } else if (location.pathname === '/billings') {
      setActive('billings');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div className='menu-dashboard'>
      <div className={`menu-home menu_icon ${active === "home" ? "active_menu" : ""}`} >
        <NavLink end to={"/home"}>
          <img src={active === "home" ? homeIconActive : homeIconDefault} alt='Botão Home' className='menu-icon menu-home-icon'></img>
        </NavLink>
      </div>


      <div className={`menu-clients menu_icon ${active === "clients" || active === "clientDetail" ? "active_menu" : ""}`}>
        <NavLink to={"/clients"}>
          <img
            src={active === "clients" || active === "clientDetail" ? clientsIconActive : clientsIcon}
            alt='Botão Clientes'
            className='menu-icon menu-clients-icon'
            onClick={() => {
              setCustomersParams();
            }}
          ></img>
        </NavLink>
      </div>

      <div className={`menu-billings menu_icon ${active === "billings" ? "active_menu" : ""}`}>
        <NavLink to={"/billings"}
          className={({ isActive }) => {
            isActive ?
              setActive("billings")
              : null;
          }}>
          <img
            src={active === "billings" ? billingIconActive : billingIcon}
            alt='Botão Cobranças'
            className='menu-icon menu-billings-icon'
            onClick={() => {
              setChargesParams();
            }}
          ></img>
        </NavLink>
      </div>
    </div>
  )
}

export default MenuIcon;