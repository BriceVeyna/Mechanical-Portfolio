import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import IndustrialMachining from './sections/IndustrialMachining';
import ProductDevelopment from './sections/ProductDevelopment';
import ArtAndDesign from './sections/ArtAndDesign';
import DesignEngineering from './sections/DesignEngineering';
import '../index.css';

export default function PortfolioContainer() {
    return (
        <div id='background'>
            <Navigation />
            <Header />
            <DesignEngineering />
            <IndustrialMachining />
            <ProductDevelopment />
            <ArtAndDesign />
            <Footer />
        </div>
    );
}