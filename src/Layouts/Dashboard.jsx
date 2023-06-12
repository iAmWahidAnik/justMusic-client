import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useCheckRole from '../hooks/useCheckRole';
import { BsStack } from "react-icons/bs";
import { MdManageAccounts, MdOutlineRemoveFromQueue, MdBookmarkAdded } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { BiAddToQueue, BiSelectMultiple } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";

const Dashboard = () => {
    const [checkRole, isLoading] = useCheckRole();
    if(isLoading){
        return <div>Loading ...</div>
    }
    // console.log(checkRole?.data.role);

    const menuItems =
        checkRole?.data.role === 'admin' ?
            <>
                <li><NavLink className={({ isActive, isPending }) => isActive && "text-primary font-bold"
                } to='/'><AiFillHome></AiFillHome> Home</NavLink></li>
                <li><NavLink className={({ isActive, isPending }) => isActive && "text-primary font-bold"
                } to='/dashboard/manageclasses'><BsStack></BsStack> Manage Classes</NavLink></li>
                <li><NavLink className={({ isActive, isPending }) => isActive && "text-primary font-bold"
                } to='/dashboard/manageusers'><MdManageAccounts className='text-xl'></MdManageAccounts> Manage Users</NavLink></li>
            </> :
            checkRole?.data.role === 'instructor' ?
                <>
                    <li><NavLink className={({ isActive, isPending }) => isActive && "text-primary font-bold"
                    } to='/'><AiFillHome></AiFillHome> Home</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive && "text-primary font-bold"
                    } to='/dashboard/addclass'><BiAddToQueue></BiAddToQueue> Add a Class</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive && "text-primary font-bold"
                    } to='/dashboard/myclasses'><MdOutlineRemoveFromQueue></MdOutlineRemoveFromQueue> My Classes</NavLink></li>
                </> :
                <>
                    <li><NavLink className={({ isActive, isPending }) => isActive && "text-primary font-bold"
                    } to='/'><AiFillHome></AiFillHome> Home</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive && "text-primary font-bold"
                    } to='/dashboard/selectedclass'><BiSelectMultiple className='text-xl'></BiSelectMultiple> My Selected Classes</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive && "text-primary font-bold"
                    } to='/dashboard/paymenthistory'><FaHistory></FaHistory> My Payment History</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive && "text-primary font-bold"
                    } to='/dashboard/enrolledclass'><MdBookmarkAdded className='text-xl'></MdBookmarkAdded> My Enrolled Classes</NavLink></li>
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
        <div className="drawer max-w-7xl mx-auto">
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