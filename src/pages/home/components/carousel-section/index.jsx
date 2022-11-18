import React from 'react';

import * as Styles from './styles';

import img1 from '../../../../assets/images/carousel1.png';
import img2 from '../../../../assets/images/carousel2.png';
import img3 from '../../../../assets/images/carousel3.png';
import img4 from '../../../../assets/images/carousel4.png';

import {ReactComponent as Pagination} from '../../../../assets/images/carousel_pagination.svg';

const CarouselSection = () => {
    return (
        <Styles.CarouselSection>
            <Styles.CarouselCirclesContainer>
                <Styles.CarouselFirstLeftCircle />
                <Styles.CarouselSecondLeftCircle />
                <Styles.CarouselThirdLeftCircle />
            </Styles.CarouselCirclesContainer>

            <Styles.CarouselContainer>
                <Styles.CarouselHeader>
                    <Styles.CarouselContainerTitle>
                        Resumo das novidades de Fall Guys
                    </Styles.CarouselContainerTitle>
                    <Pagination />
                </Styles.CarouselHeader>

                <Styles.CarouselContainerImages>
                    <img src={img1} alt='Carrossel 1' />
                    <img src={img2} alt='Carrossel 2' />
                    <img src={img3} alt='Carrossel 3' />
                    <img src={img4} alt='Carrossel 4' />
                </Styles.CarouselContainerImages>
            </Styles.CarouselContainer>

            <Styles.CarouselCirclesContainer>
                <Styles.CarouselFirstRightCircle />
                <Styles.CarouselSecondRightCircle />
                <Styles.CarouselThirdRightCircle />
            </Styles.CarouselCirclesContainer>

        </Styles.CarouselSection>
    );
}

export default CarouselSection;
