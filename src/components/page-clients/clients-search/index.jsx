import { useContext, useState } from 'react';
import ClientIcon from '../../../assets/Clients-icon.png';
import Statics from '../../../assets/Statics.png';
// import SearchIcon from '../../../assets/Search-icon.png'
import './style.css';
import { SingContext } from '../../../context/SingContext';

function ClientHeader() {
    const [search, setSearch] = useState('');
    const { setOpenClientModal } = useContext(SingContext)

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className='client-header'>
                <div className='client-icon'>
                    <img src={ClientIcon} alt='Ícone Cliente' />
                    <h1>Clientes</h1>
                </div>
                <div className='client-header-right'>
                    <button
                        className='client-button-add'
                        onClick={() => { setOpenClientModal(true) }}
                    >+ Adicionar cliente</button>
                    <button className='client-button-statics'><img src={Statics} alt='Ícone Estatísticas' /></button>
                    <form onSubmit={handleSubmit}>
                        <input
                            className='client-input'
                            type="text"
                            placeholder="Pesquisa"
                            value={search}
                            onChange={handleInputChange}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ClientHeader;
