import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Categories = () => {
    return (
        <div className='flex flex-col lg:flex-row my-20 gap-10 text-center'>
            <div className='shadow-xl relative'>
                <img className='rounded-xl h-[700px] w-full object-cover' src="https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80" alt="category image" />
                <button className='absolute btn btn-white uppercase bottom-10 hover:-translate-x-5 font-semibold'>Pop Music <FaArrowRight className='ml-5'></FaArrowRight></button>
            </div>
            <div className='shadow-xl relative'>
                <img className='rounded-xl h-[700px] w-full object-cover' src="https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="category image" />
                <button className='absolute btn btn-white uppercase bottom-10 hover:-translate-x-5 font-semibold'>Rock Music <FaArrowRight className='ml-5'></FaArrowRight></button>
            </div>
            <div className='shadow-xl relative'>
                <img className='rounded-xl h-[700px] w-full object-cover' src="https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1341&q=80" alt="category image" />
                <button className='absolute btn btn-white uppercase bottom-10 hover:-translate-x-5 font-semibold'>Jazz Music <FaArrowRight className='ml-5'></FaArrowRight></button>
            </div>
        </div>
    );
};

export default Categories;