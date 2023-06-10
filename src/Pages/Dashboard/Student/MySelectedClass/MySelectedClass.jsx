import React from 'react';
import MyClassCard from './MyClassCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const MySelectedClass = () => {
    const { data: myAddedClass, isLoading, refetch } = useQuery({
        queryKey: ['myAddedClass'],
        queryFn: async () => {
            const response = axios.get('http://localhost:3000/myselectedclass')
            return response
        }
    })
    if (isLoading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }
    const addedClass = myAddedClass.data;
    return (
        <div className='my-20 grid grid-cols-3'>
            {/* <h1>This is iy selected class - student route</h1> */}
            {
                addedClass.map(myClass => <MyClassCard key={myClass._id} myClass={myClass} refetch={refetch}></MyClassCard>)
            }
        </div>
    );
};

export default MySelectedClass;