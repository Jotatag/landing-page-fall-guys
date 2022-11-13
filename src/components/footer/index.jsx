import React from 'react';

import * as Styles from './styles';

import Logo from '../logo';
import Divider from '../divider';
import Platforms from '../platforms';

import classification from '../../assets/images/classification.png';
import {ReactComponent as ArrowUp} from '../../assets/images/arrow_up.svg';

const Footer = () => {
    return (
        <Styles.FooterSection>
            <Styles.FooterContainer>
                <Styles.FooterHeader>
                    <Logo className='small' />
                    <div className='transparent'>
                        <ArrowUp width={15} />
                        Voltar ao topo
                    </div>
                </Styles.FooterHeader>
                <Styles.FooterNav>
                    <div className='nav-menu'>
                        <ul>
                            <li><a href='#'>Início</a></li>
                            <li><a href='#'>Temporada atual</a></li>
                            <li><a href='#'>Temporadas anteriores</a></li>
                            <li><a href='#'>Notícias</a></li>
                            <li><a href='#'>Baixe agora</a></li>
                        </ul>
                    </div>
                    <img src={classification} alt='Classificação indicativa' />
                </Styles.FooterNav>
                <Divider />
                <Styles.FooterCopyright>
                    © 2022 Mediatonic Limited. Todos os direitos reservados. O logotipo da Mediatonic e o logotipo e personagens de Fall Guys são marcas comerciais da Mediatonic Limited. O logotipo da Epic Games é uma marca comercial ou marca registrada da Epic Games, Inc. nos EUA e outros lugares.  
                </Styles.FooterCopyright>
                <Styles.FooterBottom>
                    <div>
                        <a href='#'>Termos de serviços</a>
                        <a href='#'>Política de Privacidade</a>
                        <a href='#'>Contrato de Licença</a>
                    </div>
                    <Platforms />
                </Styles.FooterBottom>
            </Styles.FooterContainer>
        </Styles.FooterSection>
    );
}

export default Footer;
