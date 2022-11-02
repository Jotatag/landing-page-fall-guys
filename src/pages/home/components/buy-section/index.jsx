import React from 'react';

import * as Styles from './styles';

import { Button, ButtonReverse } from '../../../../components/button';

import mascot from '../../../../assets/images/mascot2.png';

const BuySection = () => {
    return (
        <Styles.BuySection>
            <Styles.BuyContainer>
                <Styles.BuyMascot src={mascot} alt='Mascot' />
                <Styles.BuyInfo>
                    <h3>Fall Guys</h3>
                    <h2>Está Espetacular</h2>
                    <span>Vamos nessa! Mergulhe em um carnaval de Coroas, com uma Cúpula do Tombão reformulada e encabeçada por novos Rounds, obstáculos e muitas celebrações das jujubas...</span>
                    <Styles.BuyButtons>
                        <ButtonReverse className='small'>Saiba mais</ButtonReverse>
                        <Button className='small'>Compre agora</Button>
                    </Styles.BuyButtons>
                </Styles.BuyInfo>
            </Styles.BuyContainer>
        </Styles.BuySection>
    );
}

export default BuySection;
