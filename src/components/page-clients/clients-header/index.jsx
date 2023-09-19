import './style.css';
import ChevronDown from '../../../assets/chevron-Down.png';


function HeaderClient() {
  return (
    <div className='client-header-up'>
      <div className='client-header-title'>
        <spam>Clientes</spam>
      </div>
      <div className='client-header-user'>
        <spam className='client-header-user-icon'>LR</spam>
        <spam className='client-header-user-name'>Lorena</spam>
        <a>
          <img src={ChevronDown} alt='Botão mais' className='client-header-user-chevron'></img>
        </a>
      </div>
    </div>
  )
}

export default HeaderClient;