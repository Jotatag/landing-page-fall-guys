import React from "react";

import * as Styles from './styles';

import Navbar from '../../../../components/navbar';
import Divider from '../../../../components/divider';
import { Button } from '../../../../components/button';
import Platforms from '../../../../components/platforms';

import avatar from '../../../../assets/images/avatar.png';
import avatar2 from '../../../../assets/images/avatar2.png';
import mascot from '../../../../assets/images/mascot.png';

const BannerSection = () => {
    return (
        <Styles.BannerSection>
            <Navbar />
            <Divider />
            <Styles.BannerContainer>
                <Styles.BannerInfo>
                    <Styles.BannerText>
                        <h2>Bem-vindo ao</h2>
                        <h1>Fall Guys: Ultimate!</h1>
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Mé faiz elementum girarzis, nisi eros vermeio.Atirei o pau no gatis, per gatis num morreus.</p>
                        <Button>Saiba mais</Button>
                        <Styles.BannerPlayers>
                            <img src={avatar} alt='Avatar' />
                            <img src={avatar2} alt='Avatar' />
                            <span className='transparent'>+ 20 milhões de jogadores</span>
                        </Styles.BannerPlayers>
                        <Styles.BannerDivider />
                        <Styles.BannerPlataforms>
                            <span className='transparent'>Integração com as maiores plataformas do mundo</span>
                            <Platforms />
                        </Styles.BannerPlataforms>
                    </Styles.BannerText>
                </Styles.BannerInfo>

                <Styles.BannerMascotContainer>
                    <img src={mascot} alt='Mascot' />
                </Styles.BannerMascotContainer>

            </Styles.BannerContainer>
        </Styles.BannerSection>
    );
}

export default BannerSection;
