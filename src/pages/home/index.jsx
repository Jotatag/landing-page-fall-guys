import React from 'react';

import { ContainerFluid } from '../../components/container';
import BannerSection from './components/banner-section';
import CarouselSection from './components/carousel-section';

const Home = () => {
    return (
        <ContainerFluid>
            <BannerSection />
            <CarouselSection />
        </ContainerFluid>
    );
}

export default Home;
