import React from 'react';
import { Navigate } from 'react-router-dom';
import useCheckRole from '../hooks/useCheckRole';

const InstructorRoute = ({ children }) => {
    const [checkRole, isLoading] = useCheckRole();
    if(isLoading){
        return <div>Loading \\\</div>
    }

    if (checkRole.data.role === 'instructor') {
        return children;
    }
    return (
        <Navigate to='/login' state={{ from: location }}></Navigate>
    );
};

export default InstructorRoute;