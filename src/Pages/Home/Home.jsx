import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import ChooseInstrument from './ChooseInstrument/ChooseInstrument';
import Reviews from './Reviews/Reviews';
import SpecialOffer from './SpecialOffer/SpecialOffer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <ChooseInstrument></ChooseInstrument>
            <SpecialOffer></SpecialOffer>
            <Categories></Categories>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;