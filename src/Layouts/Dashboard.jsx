import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useCheckRole from '../hooks/useCheckRole';

const Dashboard = () => {
    const checkRole = useCheckRole();
    // console.log(checkRole?.data);

    const menuItems =
        checkRole?.data === 'admin' ?
            <>
                <li><Link to='/dashboard/manageclasses'>Manage Classes</Link></li>
                <li><Link to='/dashboard/manageusers'>Manage Users</Link></li>
            </> :
            checkRole?.data === 'instructor' ?
                <>
                    <li><Link to='/dashboard/addclass'>Add a Class</Link></li>
                    <li><Link to='/dashboard/myclasses'>My Classes</Link></li>
                </> :
                <>
                    <li><Link to='/dashboard/selectedclass'>My Selected Classes</Link></li>
                    <li><Link to='/dashboard/enrolledclass'>My Enrolled Classes</Link></li>
                </>
    // if (checkRole === 'admin') {
    //     const menuItems =
    //         <>
    //             <li><Link to='/dashboard/selectedclass'>My Selected Classes</Link></li>
    //             <li><Link to='/dashboard/enrolledclass'>My Enrolled Classes</Link></li>
    //         </>
    //     return menuItems
    // }
    // else if (checkRole === 'instructor') {
    //     const menuItems =
    //         <>
    //             <li><Link to='/dashboard/selectedclass'>My Selected Classes</Link></li>
    //             <li><Link to='/dashboard/enrolledclass'>My Enrolled Classes</Link></li>
    //         </>
    //     return menuItems
    // }
    // else {
    //     const menuItems =
    //         <>
    //             <li><Link to='/dashboard/selectedclass'>My Selected Classes</Link></li>
    //             <li><Link to='/dashboard/enrolledclass'>My Enrolled Classes</Link></li>
    //         </>
    //     return menuItems
    // }
    // }


    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">Dashboards</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {menuItems}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200">
                    {/* Sidebar content here */}
                    {menuItems}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;