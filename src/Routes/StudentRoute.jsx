import React from 'react';
import { Navigate } from 'react-router-dom';
import useCheckRole from '../hooks/useCheckRole';

const StudentRoute = ({ children }) => {
    const [checkRole, isLoading] = useCheckRole();

    if (checkRole.data.role === 'student') {
        return children;
    }
    return (
        <Navigate to='/login' state={{ from: location }}></Navigate>
    );
};

export default StudentRoute;