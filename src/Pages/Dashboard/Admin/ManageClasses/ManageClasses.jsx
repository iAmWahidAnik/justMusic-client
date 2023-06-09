import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import TableData from './TableData';

const ManageClasses = () => {
    const { data: classes, isLoading, refetch } = useQuery({
        queryKey: ['allClass'],
        queryFn: async () => {
            const response = await axios.get('http://localhost:3000/allclass')
            return response
        }
    })
    if (isLoading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }
    const allClass = classes.data;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor email</th>
                            <th>Available Seat</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allClass.map(perClass => <TableData key={perClass._id} perClass={perClass}></TableData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;