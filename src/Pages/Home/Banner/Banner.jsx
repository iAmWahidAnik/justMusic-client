import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

// TODO : have to fix this carousel 

const Banner = () => {
    return (
        <div>
            <AwesomeSlider>
                <div className="bg-cover w-full h-full bg-[url('https://images.unsplash.com/photo-1493247035880-efdf55d1cc99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]">1</div>
                <div className="bg-cover w-full h-full bg-[url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]">2</div>
                <div className="bg-cover w-full h-full bg-[url('https://images.unsplash.com/photo-1487954152950-e0584673b7f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]">3</div>
                <div className="bg-cover w-full h-full bg-[url('https://i.ytimg.com/vi/eh5zzskJL8w/maxresdefault.jpg')]"></div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner;