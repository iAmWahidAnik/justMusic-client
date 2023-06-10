import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import PopularClass from './PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Categories></Categories>
        </div>
    );
};

export default Home;