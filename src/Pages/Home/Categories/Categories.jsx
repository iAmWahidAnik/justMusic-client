import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";
import anime from 'animejs/lib/anime.es.js';

const Categories = () => {
    const animationRef = useRef(null);
    useEffect(() => {
        animationRef.current = anime({
            targets: ".el",
            translateX: 250,
            delay: function (el, i) {
                return i * 100;
            },
            // loop: true,
            direction: "alternate",
            easing: "easeInOutSine"
        });
    }, []);
    // anime({
    //     targets: '.anime',
    //     translateX: 250,
    //     rotate: '5turn',
    //     backgroundColor: '#FFF',
    //     duration: 800,
    //     // loop: true,
    //     // autoplay: false
    // });
    // const animation = anime({
    //     targets: '.anime',
    //     translateX: 250,
    //     rotate: '5turn',
    //     backgroundColor: '#FFF',
    //     duration: 2000,
    //     // loop: true,
    //     // autoplay: false
    // });

    // const handleAnimation = () => {
    //     animation.play();
    // onClick={()=>animationRef.current.restart()}
    // }
    return (
        <>
            <h1 className='text-5xl font-semibold text-primary border-l-8 border-primary pl-3'>Categories</h1>
            <p className='text-gray-500 ml-5 my-3'>Best Of</p>
            <div className='flex flex-col lg:flex-row mb-20 gap-10 text-center overflow-x-hidden'>
                <div className='shadow-xl relative el'>
                    <img className='rounded-xl h-[700px] w-full object-cover' src="https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80" alt="category image" />
                    <button className='absolute btn btn-white uppercase bottom-10 hover:-translate-x-5 font-semibold shadow-lg'>Pop Music <FaArrowRight className='ml-5'></FaArrowRight></button>
                </div>
                <div className='shadow-xl relative el'>
                    <img className='rounded-xl h-[700px] w-full object-cover' src="https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="category image" />
                    <button className='absolute btn btn-white uppercase bottom-10 hover:-translate-x-5 font-semibold shadow-lg'>Rock Music <FaArrowRight className='ml-5'></FaArrowRight></button>
                </div>
                <div className='shadow-xl relative el'>
                    <img className='rounded-xl h-[700px] w-full object-cover' src="https://oraz.jollyany.co/images/shawn-ajvwgc024ni-unsplash.jpg" alt="category image" />
                    <button className='absolute btn btn-white uppercase bottom-10 hover:-translate-x-5 font-semibold shadow-lg'>Jazz Music <FaArrowRight className='ml-5'></FaArrowRight></button>
                </div>
            </div ></>
    );
};

export default Categories;