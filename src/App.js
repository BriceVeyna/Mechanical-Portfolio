import React from "react";
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import IndustrialMachining from './components/sections/IndustrialMachining';
import ProductDevelopment from './components/sections/ProductDevelopment';
import ArtAndDesign from './components/sections/ArtAndDesign';
import DesignEngineering from './components/sections/DesignEngineering';
import './App.css';

export default function App() {
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