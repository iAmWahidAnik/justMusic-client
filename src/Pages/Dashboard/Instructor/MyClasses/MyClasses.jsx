import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import ClassCard from './ClassCard';

const MyClasses = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    if (!token) {
        return
    }
    const { data: myClassesArray, isLoading } = useQuery({
        queryKey: ['instructorClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axios.get(`https://just-music-server-side.vercel.app/classes?email=${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response;
        }
    })

    if (isLoading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }
    const myClass = myClassesArray.data;
    return (
        <div className='grid grid-cols-3 gap-5 my-20'>
            {
                myClass.map(perClass => <ClassCard key={perClass._id} perClass={perClass}></ClassCard>)
            }
        </div>
    );
};

export default MyClasses;