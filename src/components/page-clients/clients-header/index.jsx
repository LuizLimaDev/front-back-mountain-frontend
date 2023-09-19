import './style.css';
import ChevronDown from '../../../assets/chevron-Down.png';

function HeaderClient() {
  return (
    <div className='client-header-up'>
      <div className='client-header-title'>
        <span>Clientes</span>
      </div>
      <div className='client-header-user'>
        <span className='client-header-user-icon'>LR</span>
        <span className='client-header-user-name'>Lorena</span>
        <a>
          <img src={ ChevronDown } alt='Botão mais' className='client-header-user-chevron'></img>
        </a>
      </div>
    </div>
  )
}

export default HeaderClient;