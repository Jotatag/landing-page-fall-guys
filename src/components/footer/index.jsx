import React from 'react';

import * as Styles from './styles';

import Logo from '../logo';

const Footer = () => {
    return (
        <Styles.FooterSection>
            <Styles.FooterContainer>
                <Styles.FooterHeader>
                    <Logo className='small' />
                    <div>
                        Voltar ao topo
                    </div>
                </Styles.FooterHeader>
            </Styles.FooterContainer>
        </Styles.FooterSection>
    );
}

export default Footer;
