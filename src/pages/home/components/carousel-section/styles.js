import styled from 'styled-components';

import Section from '../../../../components/section';
import { Container } from '../../../../components/container';

export const CarouselSection = styled(Section)`
  display: flex;
  height: 1000px;
`
export const CarouselCirclesContainer = styled.div`
  z-index: 1;
  width: 230px;
  flex-shrink: 0;
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
    width: 800px;
    height: 800px;
    top: -250px;
    left: -840px;
  }
`

export const CarouselSecondLeftCircle = styled(CarouselCircles)`
  :before {
    width: 900px;
    height: 900px;
    top: -300px;
    left: -860px;
  }
`

export const CarouselThirdLeftCircle = styled(CarouselCircles)`
  :before {
    width: 1000px;
    height: 1000px;
    top: -350px;
    left: -880px;
  }
`

export const CarouselFirstRightCircle = styled(CarouselCircles)`
  :before {
    width: 800px;
    height: 800px;
    top: -250px;
    right: -840px;
  }
`

export const CarouselSecondRightCircle = styled(CarouselCircles)`
  :before {
    width: 900px;
    height: 900px;
    top: -300px;
    right: -860px;
  }
`

export const CarouselThirdRightCircle = styled(CarouselCircles)`
  :before {
    width: 1000px;
    height: 1000px;
    top: -350px;
    right: -880px;
  }
`

export const CarouselContainer = styled(Container)`
  width: 100%;
`

export const CarouselContainerText = styled.div`
  color: ${(props) => props.theme.palette.secondary.main};
  font-size: 32px;
  font-weight: 700;
  max-width: 380px;
  margin-bottom: 50px;
  width: 100%;
`

export const CarouselContainerImages = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
`

