import React from 'react';
import UserTableData from './userTableData';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ManageUsers = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const response = await axios.get('http://localhost:3000/allusers')
            return response
        }
    })
    if (isLoading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }
    const allUsers = users?.data;
    return (
        <div>
            {/* <h1>This is manage users page - Admin Route </h1> */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allUsers.map(user => <UserTableData key={user._id} user={user} refetch={refetch}></UserTableData> )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;