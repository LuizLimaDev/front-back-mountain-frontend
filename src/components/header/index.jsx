import './style.css';
import ChevronDown from '../../assets/chevron-down.png'


function HeaderDashBoard() {
  return (
    <div className='dashboard-header'>
      <div>
        <h1>Resumo das cobranças</h1>
      </div>
      <div className='dashboard-user'>
        <spam className='dashboard-user-icon'>LR</spam>
        <spam className='dashboard-user-name'>Lorena</spam>
        <a>
          <img src={ChevronDown} alt='Botão mais' className='dashboard-user-chevron'></img>
        </a>
      </div>
    </div>
  )
}

export default HeaderDashBoard;