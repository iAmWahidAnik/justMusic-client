import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    return (
        <div>
            {/* <AwesomeSlider
                media={[
                    {
                        source: 'https://images.unsplash.com/photo-1493247035880-efdf55d1cc99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    },
                    {
                        source: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    },
                    {
                        source: 'https://images.unsplash.com/photo-1487954152950-e0584673b7f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    },
                ]}
            /> */}
            {/* <AwesomeSlider cssModule={AwesomeSliderStyles}>
                <div data-src="/path/to/image-0.png" />
                <div data-src="/path/to/image-1.png" />
                <div data-src="/path/to/image-2.jpg" />
            </AwesomeSlider> */}
            <AwesomeSlider>
                
                <div data-src="https://images.unsplash.com/photo-1493247035880-efdf55d1cc99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"></div>
                <div data-src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"></div>
                <div data-src="https://images.unsplash.com/photo-1487954152950-e0584673b7f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"></div>
                {/* <div>3</div>
                <div>4</div> */}
            </AwesomeSlider>
        </div>
    );
};

export default Banner;