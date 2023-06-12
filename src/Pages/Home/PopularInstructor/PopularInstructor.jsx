import React from 'react';
import PopularInstructorCard from './PopularInstructorCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PopularInstructor = () => {
    const { data: popularInstructors = [], isLoading, refetch } = useQuery({
        queryKey: ['popularInstructors'],
        queryFn: async () => {
            const response = axios.get('http://localhost:3000/popularinstructor')
            return response;;
        }
    })
    if (isLoading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }
    const instructors = popularInstructors?.data;
    return (
        <>
            <h1 className='text-5xl font-semibold text-primary border-l-8 border-primary pl-3'>Popular Instructors</h1>
            <div className='my-20 grid grid-cols-1 lg:grid-cols-3  gap-5'>
                {
                    instructors.map(ins => <PopularInstructorCard key={ins._id} ins={ins}></PopularInstructorCard>)
                }
            </div></>
    );
};

export default PopularInstructor;