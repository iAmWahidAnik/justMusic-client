import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ClassCard from './classCard';

const PopularClass = () => {
    const { data: popularClasses = [], isLoading, refetch } = useQuery({
        queryKey: ['popularCLasses'],
        queryFn: async () => {
            const response = axios.get('http://localhost:3000/popularclass')
            return response;
        }
    })
    if (isLoading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }
    const classes = popularClasses?.data;
    console.log(classes);
    return (
        <>
            <h1 className='text-5xl font-semibold text-primary border-l-8 border-primary pl-3 mt-20'>Popular Classes</h1>
            <div className='my-20 grid grid-cols-1 lg:grid-cols-3  gap-5'>
                {
                    classes.map(perClass => <ClassCard key={perClass._id} perClass={perClass}></ClassCard>)
                }
            </div></>
    );
};

export default PopularClass;