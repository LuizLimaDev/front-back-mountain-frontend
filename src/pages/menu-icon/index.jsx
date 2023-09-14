import './style.css';
import homeIcon from '../../assets/Menu/Home-button.png';
import billingIcon from '../../assets/Menu/Billing-button.png';
import clientsIcon from '../../assets/Menu/Clients-button.png';

function MenuIcon() {
  return (
    <div>
      <div className='menu-home'>
        <a placeholder='' className='menu-home-button'>
          <img src={homeIcon} alt='Botão Home' className='menu-icon menu-home-icon'></img>
        </a>
      </div>

      <div className='menu-clients'>
        <a placeholder='' className='menu-clients-button'>
          <img src={clientsIcon} alt='Botão Clientes' className='menu-icon menu-clients-icon'></img>
        </a>
      </div>

      <div className='menu-billings'>
        <a placeholder='' className='menu-billings-button'>
          <img src={billingIcon} alt='Botão Cobranças' className='menu-icon menu-billings-icon'></img>
        </a>
      </div>
    </div>
  )
}

export default MenuIcon;