import './style.css';
import homeIconActive from '../../assets/Menu/Home-button.png';
import homeIconDefault from '../../assets/Menu/Home-button_default.png';
import billingIcon from '../../assets/Menu/Billing-button.png';
import clientsIconActive from '../../assets/Menu/clients_active.icon.png';
import clientsIcon from '../../assets/Menu/Clients-button.png';
import { Link, NavLink } from "react-router-dom";
import { useState } from "react"

// eslint-disable-next-line react/prop-types
function MenuIcon() {
  const [active, setActive] = useState("");
  return (
    <div className='menu-dashboard'>
      <div className={`menu-home menu_icon ${active === "home" ? "active_menu" : ""}`} >
        <NavLink end to={"/home"} className={({isActive}) => {
          isActive ? 
          setActive("home")
        : null;
        }}>
          <img src={active === "home" ? homeIconActive : homeIconDefault} alt='Botão Home' className='menu-icon menu-home-icon'></img>
        </NavLink>
      </div>


      <div className={`menu-clients menu_icon ${active === "clients" ? "active_menu" : ""}`}>
        <NavLink to={"/clients"} className={({ isActive }) => {
          isActive ? 
          setActive("clients")
        : null;
        }}>
          <img src={active === "clients" ? clientsIconActive : clientsIcon} alt='Botão Clientes' className='menu-icon menu-clients-icon'></img>
        </NavLink>
      </div>

      <div className={`menu-billings menu_icon ${active === "billings" ? "active_menu" : ""}`}>
        <NavLink to={"/billings"} className={({ isActive }) => {
          isActive ? 
            setActive("billings")
          : null;
        }}>
          <img src={billingIcon} alt='Botão Cobranças' className='menu-icon menu-billings-icon'></img>
        </NavLink>
      </div>
    </div>
  )
}

export default MenuIcon;