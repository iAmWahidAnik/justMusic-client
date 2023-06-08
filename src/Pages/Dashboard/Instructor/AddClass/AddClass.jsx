import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='py-20 bg-slate-200'>
            <form className='max-w-xl mx-auto p-10 bg-white rounded-xl shadow-xl' action="">
            <div className='my-7'>
                    <h1 className='text-3xl font-bold text-primary'>ADD A CLASS</h1>
                    <div className='divider'></div>
                </div>
                <div className='flex gap-5 my-7'>
                    <input type="text" placeholder="Class Name" className="input input-bordered input-primary w-full max-w-xs focus:outline-none" />
                    <input type="file" placeholder="" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                </div>
                <div className='flex gap-5 my-7'>
                    <input readOnly disabled type="text" value={user?.displayName || 'unknown'} className="input input-bordered input-primary w-full max-w-xs" />
                    <input readOnly disabled type="text" value={user?.email} className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className='flex gap-5 my-7'>
                    <input type="number" placeholder="Available Seats" className="input input-bordered input-primary w-full max-w-xs [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none" />
                    <input type="number" placeholder="Price" className="input input-bordered input-primary w-full max-w-xs [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none" />
                </div>
                <div className='my-7'>
                    <input className='btn btn-primary btn-block' type="submit" value="ADD" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;