import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import EnrolledClassCard from './EnrolledClassCard';

const MyEnrolledClass = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    if (!token) {
        return
    }
    if (loading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }

    const { data: myEnrolledClass, isLoading } = useQuery({
        queryKey: ['myEnrolledClass'],
        queryFn: async () => {
            const response = axios.get(`http://localhost:3000/enrolledclass?email=${user?.email}`, {
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

    const enrolledClass = myEnrolledClass.data;
    return (
        <div className='my-20 grid grid-cols-3'>
            {
                enrolledClass.map(perClass => <EnrolledClassCard key={perClass._id} perClass={perClass}></EnrolledClassCard>)
            }
        </div>
    );
};

export default MyEnrolledClass;