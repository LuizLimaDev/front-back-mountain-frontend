import './style.css';
import homeIconActive from '../../assets/Menu/Home-button.png';
import homeIconDefault from '../../assets/Menu/Home-button_default.png';
import billingIcon from '../../assets/Menu/Billing-button.png';
import clientsIconActive from '../../assets/Menu/clients_active.icon.png';
import clientsIcon from '../../assets/Menu/Clients-button.png';
import { Link } from "react-router-dom";

function MenuIcon({ active }) {
  return (
    <div className='menu-dashboard'>
      <div className={`menu-home ${active === "home" ? "active_menu" : ""}`}>
        <Link to={"/home"} className='menu-home-button'>
          <img src={active === "home" ? homeIconActive : homeIconDefault} alt='Botão Home' className='menu-icon menu-home-icon'></img>
        </Link>
      </div>


      <div className={`menu-clients ${active === "clients" ? "active_menu" : ""}`}>
        <Link to={"/clients"} className='menu-clients-button'>
          <img src={active === "clients" ? clientsIconActive : clientsIcon} alt='Botão Clientes' className='menu-icon menu-clients-icon'></img>
        </Link>
      </div>

      <div className={`menu-billings ${active === "billings" ? "active_menu" : ""}`}>
        <Link to={"/billings"} className='menu-billings-button'>
          <img src={billingIcon} alt='Botão Cobranças' className='menu-icon menu-billings-icon'></img>
        </Link>
      </div>
    </div>
  )
}

export default MenuIcon;