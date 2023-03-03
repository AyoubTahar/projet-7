import React from 'react';
import {  useLocation, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Error from './Error';
import ImageSlider from '../components/ImageSlider';
import Information from '../components/Information';

const FicheLogement = () => {
        const location = useLocation()
        const {housedata} = location.state
    return (
        <div>
            <Header/>
            <ImageSlider housedata={housedata} />
            <Information tagdata={housedata} />
            <Footer/>
        </div>
    );
};

export default FicheLogement;