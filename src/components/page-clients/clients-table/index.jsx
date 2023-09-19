import React, { useState, useEffect } from 'react';
import './style.css';
import ChevronUpDown from '../../../assets/chevron-Up-Down.png'
import CreateBilling from '../../../assets/create-billing.png'


function ClientsTable() {

    return (
        <div className='clients-table-page'>
            <div className='clients-table-header'>
                <div className='clients-table-image-header clients-table-header-content'>
                    <img src={ChevronUpDown} alt='Setas para baixo e para cima'></img>
                    <h3>Cliente</h3>
                </div>
                <h3 className='clients-table-header-content'>CPF</h3>
                <h3 className='clients-table-header-content'>E-mail</h3>
                <h3 className='clients-table-header-content'>Telefone</h3>
                <h3 className='clients-table-header-content'>Status</h3>
                <h3 className='clients-table-header-content'>Criar Cobrança</h3>
            </div>
            <div className='clients-table-content'>
                <div className='clients-table-content-line'>
                    <span className='clients-table-content-line-name'>Sara da Silva</span>
                    <span className='clients-table-content-cpf'>054 365 255 87</span>
                    <span className='clients-table-content-line-email'>sarasilva@cubos.io</span>
                    <span className='clients-table-content-line-phone'>71 9 9462 8654</span>
                    <span className='clients-table-content-line-status'>inadimplente</span>
                    <a className='clients-table-content-line-add'>
                        <img src={CreateBilling} alt='Criar cobrança'></img>
                    </a>
                </div>
                <div className='clients-table-content-line'>
                    <span>Sara da Silva</span>
                    <span>054 365 255 87</span>
                    <span>sarasilva@cubos.io</span>
                    <span>71 9 9462 8654</span>
                    <span>inadimplente</span>
                    <a>
                        <img src={CreateBilling} alt='Criar cobrança'></img>
                    </a>
                </div>
                <div className='clients-table-content-line'>
                    <span>Sara da Silva</span>
                    <span>054 365 255 87</span>
                    <span>sarasilva@cubos.io</span>
                    <span>71 9 9462 8654</span>
                    <span>inadimplente</span>
                    <a>
                        <img src={CreateBilling} alt='Criar cobrança'></img>
                    </a>
                </div>
                <div className='clients-table-content-line'>
                    <span>Sara da Silva</span>
                    <span>054 365 255 87</span>
                    <span>sarasilva@cubos.io</span>
                    <span>71 9 9462 8654</span>
                    <span>inadimplente</span>
                    <a>
                        <img src={CreateBilling} alt='Criar cobrança'></img>
                    </a>
                </div>
                <div className='clients-table-content-line'>
                    <span>Sara da Silva</span>
                    <span>054 365 255 87</span>
                    <span>sarasilva@cubos.io</span>
                    <span>71 9 9462 8654</span>
                    <span>em dia</span>
                    <a>
                        <img src={CreateBilling} alt='Criar cobrança'></img>
                    </a>
                </div>
                <div className='clients-table-content-line'>
                    <span>Sara da Silva</span>
                    <span>054 365 255 87</span>
                    <span>sarasilva@cubos.io</span>
                    <span>71 9 9462 8654</span>
                    <span>em dia</span>
                    <a>
                        <img src={CreateBilling} alt='Criar cobrança'></img>
                    </a>
                </div>
                <div className='clients-table-content-line'>
                    <span>Sara da Silva</span>
                    <span>054 365 255 87</span>
                    <span>sarasilva@cubos.io</span>
                    <span>71 9 9462 8654</span>
                    <span>em dia</span>
                    <a>
                        <img src={CreateBilling} alt='Criar cobrança'></img>
                    </a>
                </div>
                <div className='clients-table-content-line'>
                    <span>Sara da Silva</span>
                    <span>054 365 255 87</span>
                    <span>sarasilva@cubos.io</span>
                    <span>71 9 9462 8654</span>
                    <span>em dia</span>
                    <a>
                        <img src={CreateBilling} alt='Criar cobrança'></img>
                    </a>
                </div>
                <div className='clients-table-content-line'>
                    <span>Sara da Silva</span>
                    <span>054 365 255 87</span>
                    <span>sarasilva@cubos.io</span>
                    <span>71 9 9462 8654</span>
                    <span>em dia</span>
                    <a>
                        <img src={CreateBilling} alt='Criar cobrança'></img>
                    </a>
                </div>
                <div className='clients-table-content-line'>
                    <span>Sara da Silva</span>
                    <span>054 365 255 87</span>
                    <span>sarasilva@cubos.io</span>
                    <span>71 9 9462 8654</span>
                    <span>em dia</span>
                    <a>
                        <img src={CreateBilling} alt='Criar cobrança'></img>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default ClientsTable;