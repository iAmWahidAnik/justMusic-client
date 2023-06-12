import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ClassCard from './ClassCard';

const Classes = () => {
    const {data: allClasses, isLoading} = useQuery({
        queryKey: ['allClasses'],
        queryFn: async() => {
            const response = axios.get('https://just-music-server-side.vercel.app/allclasses')
            return response;
        }
    })
    if (isLoading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }
    const classes = allClasses.data;
    return (
        <div className='my-20 grid grid-cols-3 gap-5'>
            {
                classes.map(perClass => <ClassCard key={perClass._id} perClass={perClass}></ClassCard>)
            }
        </div>
    );
};

export default Classes;