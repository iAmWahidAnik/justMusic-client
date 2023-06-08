import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(res => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Logged Out successfully'
                })
            })
            .catch(error => {
                const message = error.message;
            })
    }

    const ulItems = <>
        <li><Link>Home</Link></li>
        <li><Link>Instructors</Link></li>
        <li><Link>Classes</Link></li>
        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
        {user && <li><button onClick={handleLogout} className='btn btn-sm lowercase'>Logout</button></li>}
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            {ulItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl font-bold">JustMusic</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {ulItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="avatar">
                            <div className="w-16 rounded">
                                <img src={user.photoURL} alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                        : <Link to='/login' className="btn">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;