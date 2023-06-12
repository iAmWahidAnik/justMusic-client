import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import InstructorCard from './InstructorCard';

const Instructors = () => {
    const { data: allInstructors, isLoading } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const response = axios.get('http://localhost:3000/allinstructors')
            return response;
        }
    })
    if (isLoading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }
    const instructors = allInstructors.data;
    return (
        <div className='my-20 grid grid-cols-3 gap-5'>
            {
                instructors.map(ins => <InstructorCard key={ins._id} ins={ins}></InstructorCard>)
            }
        </div>
    );
};

export default Instructors;