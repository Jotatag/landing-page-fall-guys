import styled from 'styled-components';

import Section from '../../../../components/section';
import { Container } from '../../../../components/container';
import Divider from '../../../../components/divider';

import background from '../../../../assets/images/background-header2.png';

export const BannerSection = styled(Section)`
  background-image: url('${background}');
  background-repeat: no-repeat;
  height: 850px;
  position: relative;
  z-index: 2;

  nav {
    margin-bottom: 20px;
  }
`

export const BannerContainer = styled(Container)`
  display: flex;
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 65px 0;
  max-width: 645px;
`

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.palette.primary.main};

  h1 {
    font-size: 64px;
  }

  h2 {
    color: ${(props) => props.theme.palette.primary.contrastText};
    font-size: 28px;
  }

  p {
    max-width: 550px;
  }

  .transparent {
    color: ${(props) => props.theme.palette.primary.main};
    opacity: 0.7;
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
