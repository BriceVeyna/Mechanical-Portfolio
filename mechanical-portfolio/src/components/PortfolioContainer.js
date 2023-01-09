import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import IndustrialMachining from './pages/IndustrialMachining';
import ProductDevelopment from './pages/ProductDevelopment';
import ArtAndDesign from './pages/ArtAndDesign';
import DesignEngineering from './pages/DesignEngineering';
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