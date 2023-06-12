import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const DashboardLanding = () => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }
    return (
        <div className="min-h-screen bg-cover bg-[url('https://img.freepik.com/free-vector/abstract-digital-grid-vector-black-background_53876-111550.jpg?w=740&t=st=1686491731~exp=1686492331~hmac=cd8c41aa01131081158308255c33b6af48ed5b5dc2dc2328b42c086427832f6f')]">
            <div className=' flex flex-col items-center justify-center h-full my-auto mx-28'>
                <h1 className='text-5xl text-white text-center uppercase font-bold my-3
            bg-gradient-to-r bg-clip-text text-transparent 
            from-cyan-500 to-emerald-500
            animate-text'>{user.displayName || user.email}</h1>
                <h1 className='text-3xl text-white text-center uppercase'>Welcome to</h1>
                <h1 className='text-7xl uppercase font-bold text-white text-center tracking-wide'>Dashboard</h1>
                <p className='text-white text-center my-5'>In music, understanding melody, harmony, and rhythm is essential for creating a captivating composition. Tempo and beat dictate the pace and feel of a piece, while notes and chords form the building blocks of music. Learning scales and keys helps musicians navigate different musical contexts, and mastering pitch and dynamics allows for expressive performances...
                    <Link className='text-primary font-semibold'>read more</Link></p>
            </div>
        </div>
    );
};

export default DashboardLanding;