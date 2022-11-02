import styled from 'styled-components';

import Section from '../../../../components/section';
import { Container } from '../../../../components/container';

import backgroud from '../../../../assets/images/background-buy-section.png';

export const BuySection = styled(Section)`
  background-image: url('${backgroud}');
  background-repeat: no-repeat;
  position: relative;
  z-index: 2;
`

export const BuyContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 130px;
`

export const BuyMascot = styled.img`
  margin-top: 100px;
  margin-left: -150px;
`

export const BuyInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;

  h2 {
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 96px;
    font-weight: 700;
    line-height: 78px;
  }

  h3 {
    color: ${(props) => props.theme.palette.primary.contrastText};
    font-size: 48px;
    font-weight: 700;
  }

  span {
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 24px;
    margin-top: 45px;
  }
`

export const BuyButtons = styled.div`
  display: flex;
  gap: 20px;
`
