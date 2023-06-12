import React from 'react';
import { Navigate } from 'react-router-dom';
import useCheckRole from '../hooks/useCheckRole';

const AdminRoute = ({ children }) => {
    const [checkRole, isLoading] = useCheckRole();

    if (checkRole.data.role === 'admin') {
        return children;
    }
    return (
        <Navigate to='/login' state={{ from: location }}></Navigate>
    );
};

export default AdminRoute;