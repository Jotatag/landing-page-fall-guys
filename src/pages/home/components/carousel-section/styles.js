import styled from 'styled-components';

import Section from '../../../../components/section';
import { Container } from '../../../../components/container';

import { device } from '../../../../styles/theme/devices';

export const CarouselSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 150px;
`
export const CarouselCirclesContainer = styled.div`
  flex-shrink: 0;
  width: 200px;
  z-index: 1;

  @media ${device.laptopL} {
    width: 120px;
  }

  @media ${device.tablet} {
    width: 40px;
  }

  @media ${device.mobileL} {
    width: 0;
  }
`

export const CarouselCircles = styled.span`
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    display: inline-block;
    border-radius: 50%;
    z-index: 1;
    fill: transparent;
    border: 40px solid #c1218f;
    opacity: 0.1;
  }
`

export const CarouselFirstLeftCircle = styled(CarouselCircles)`
  :before {
    width: 1234px;
    height: 1204px;
    top: -400px;
    left: -1275px;

    @media ${device.mobileL} {
      display: none;
    }
  }
`

export const CarouselSecondLeftCircle = styled(CarouselCircles)`
  :before {
    width: 1405px;
    height: 1371px;
    top: -480px;
    left: -1365px;

    @media ${device.tablet} {
      display: none;
    }
  }
`

export const CarouselThirdLeftCircle = styled(CarouselCircles)`
  :before {
    width: 1563px;
    height: 1525px;
    top: -550px;
    left: -1440px;

    @media ${device.laptopL} {
      display: none;
    }
  }
`

export const CarouselFirstRightCircle = styled(CarouselCircles)`
  :before {
    width: 1234px;
    height: 1204px;
    top: -380px;
    right: -1475px;

    @media ${device.laptopL} {
      right: -1395px;
    }

    @media ${device.tablet} {
      right: -1315px;
    }

    @media ${device.mobileL} {
      display: none;
    }
  }
`

export const CarouselSecondRightCircle = styled(CarouselCircles)`
  :before {
    width: 1405px;
    height: 1371px;
    top: -470px;
    right: -1570px;

    @media ${device.laptopL} {
      right: -1485px;
    }

    @media ${device.tablet} {
      display: none;
    }
  }
`

export const CarouselThirdRightCircle = styled(CarouselCircles)`
  :before {
    width: 1563px;
    height: 1525px;
    top: -550px;
    right: -1650px;

    @media ${device.laptopL} {
      display: none;
    }
  }
`

export const CarouselContainer = styled(Container)`
  margin: 0 20px;
  overflow: hidden;
  width: 100%;
`

export const CarouselContainerText = styled.div`
  color: ${(props) => props.theme.palette.secondary.main};
  font-size: 32px;
  font-weight: 700;
  max-width: 385px;
  margin-bottom: 50px;
  width: 100%;

  @media ${device.tablet} {
    font-size: 28px;
  }

  @media ${device.mobileS} {
    font-size: 24px;
  }
`

export const CarouselContainerImages = styled.div`
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;
  gap: 15px;

  &::-webkit-scrollbar {
    display: none;
  }
`

