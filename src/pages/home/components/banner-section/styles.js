import styled from 'styled-components';

import Section from '../../../../components/section';
import { Container } from '../../../../components/container';
import Divider from '../../../../components/divider';

import { device } from '../../../../styles/theme/devices';

import background from '../../../../assets/images/background-header2.png';

export const BannerSection = styled(Section)`
  background-image: url('${background}');
  background-repeat: no-repeat;
  height: 850px;
  position: relative;
  z-index: 2;

  @media ${device.laptopS} {
    background-position-y: -75px;
    height: 775px;
  }

  @media ${device.laptop} {
    height: 900px;
  }

  @media ${device.tablet} {
    background-position: -120px 0;
    height: 950px;
  }

  nav {
    margin-bottom: 20px;
  }
`

export const BannerContainer = styled(Container)`
  display: flex;

  @media ${device.laptop} {
    flex-direction: column;
  }
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 65px 0;
  max-width: 645px;

  @media ${device.laptopS} {
    padding: 35px 0;
    max-width: 490px;
  }

  @media ${device.laptop} {
    align-self: center;
  }
`

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.palette.primary.main};

  @media ${device.laptop} {
    align-items: center;
  }

  h1 {
    font-size: 64px;

    @media ${device.laptopS} {
      font-size: 48px;
    }

    @media ${device.laptop} {
      font-size: 36px;
      text-align: center;
    }
  }

  h2 {
    color: ${(props) => props.theme.palette.primary.contrastText};
    font-size: 28px;

    @media ${device.laptopS} {
      font-size: 20px;
    }
  }

  p {
    max-width: 550px;

    @media ${device.laptop} {
      display: none;
    }
  }

  .transparent {
    color: ${(props) => props.theme.palette.primary.main};
    opacity: 0.7;

    @media ${device.laptop} {
      font-size: 14px;
    }

    @media ${device.mobileS} {
      font-size: 12px;
    }
  }
`

export const BannerPlayers = styled.div`
  display: flex;
  align-items: center;
  
  > img + img {
    margin-left: -10px;
  }

  span {
    font-size: 15px;
    margin: 0 10px;
  }
`

export const BannerMascotContainer = styled.div`
  position: relative;
  flex-grow: 1;
  z-index: 2;

  img {
    position: absolute;
    top: 70px;
    right: 60px;

    @media ${device.laptopL} {
      right: -35px;
    }

    @media ${device.laptopM} {
      top: 150px;
      right: -45px;
      width: 500px;
    }

    @media ${device.laptopS} {
      top: 130px;
      right: -50px;
      width: 450px;
    }

    @media ${device.laptop} {
      top: 0;
      left: 0; 
      right: 0; 
      margin-left: auto; 
      margin-right: auto; 
      width: 250px;
    }
  }
`

export const BannerDivider = styled(Divider)`
  margin: 30px 0;
`

export const BannerPlataforms = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 30px;
    margin-top: 20px;

    img {
      height: 28px;
    }
  }
`
