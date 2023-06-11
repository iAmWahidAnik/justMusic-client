import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <Categories></Categories>
        </div>
    );
};

export default Home;