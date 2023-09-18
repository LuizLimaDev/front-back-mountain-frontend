import './style.css';
import ChevronDown from '../../assets/chevron-down.png'


function HeaderDashBoard() {
  return (
    <div className='dashboard-header'>
      <div>
        <h1>Resumo das cobranças</h1>
      </div>
      <div className='dashboard-user'>
        <span className='dashboard-user-icon'>LR</span>
        <span className='dashboard-user-name'>Lorena</span>
        <a>
          <img src={ChevronDown} alt='Botão mais' className='dashboard-user-chevron'></img>
        </a>
      </div>
    </div>
  )
}

export default HeaderDashBoard;