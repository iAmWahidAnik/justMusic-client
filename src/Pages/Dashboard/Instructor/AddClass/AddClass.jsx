import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';

const imageUploadToken = import.meta.env.VITE_IMAGE_TOKEN;

const AddClass = () => {
    const { user, loading } = useContext(AuthContext);
    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageUploadToken}`

    if (loading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.classImage[0])
        fetch(imageHostingURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const classImageLink = imageResponse.data.display_url;
                    const { className, instructorName, instructorEmail, availableSeat, price } = data;
                    const intPrice = parseInt(price);
                    const intSeat = parseInt(availableSeat);
                    const newClass = { className, classImage: classImageLink, instructorName, instructorEmail, availableSeat: intSeat, price: intPrice, totalEnrolledStudent: 0, feedback: '', status: 'pending' };

                    axios.post('http://localhost:3000/addclass', newClass)
                        .then(res => {
                            if (res.data.insertedId) {
                                reset();
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
                                    title: 'Class Added successfully, Will display after admin approval'
                                })
                            }
                        })
                        .catch(error => {
                            const message = error.message;
                            console.log(message)
                        })
                }
            })
    }

    return (
        <div className='py-20 bg-slate-200'>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-xl mx-auto p-10 bg-white rounded-xl shadow-xl' action="">
                <div className='my-7'>
                    <h1 className='text-3xl font-bold text-primary'>ADD A CLASS</h1>
                    <div className='divider'></div>
                </div>
                <div className='flex gap-5 my-7'>
                    <input {...register("className", { required: true })} type="text" placeholder="Class Name" className="input input-bordered input-primary w-1/2 max-w-xs focus:outline-none" />
                    <input {...register("classImage", { required: true })} type="file" placeholder="" className="file-input file-input-bordered file-input-primary w-1/2 max-w-xs" />
                </div>
                <div className='flex gap-5 my-7'>
                    <input {...register("instructorName")} readOnly type="text" value={user?.displayName || 'unknown'} className="input input-bordered input-primary max-w-xs w-1/2 focus:outline-none" />
                    <input {...register("instructorEmail")} readOnly type="text" value={user?.email} className="input input-bordered input-primary max-w-xs w-1/2 focus:outline-none" />
                </div>
                <div className='flex gap-5 my-7'>
                    <select {...register("availableSeat", { required: true })} className="select select-primary w-1/2 lg:w-[238px] focus:outline-none">
                        <option disabled selected>Available Seats</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                        <option>35</option>
                        <option>40</option>
                    </select>
                    {/* <input {...register("availableSeat", {required: true})} type="number" placeholder="Available Seats" className="input input-bordered input-primary w-full max-w-xs [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none" /> */}
                    <input {...register("price", { required: true })} type="number" placeholder="Price $" className="input input-bordered input-primary w-1/2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none" />
                </div>
                {
                    errors.className?.type === 'required' ||
                        errors.classImage?.type === 'required' ||
                        errors.availableSeat?.type === 'required' ||
                        errors.price?.type === 'required'
                        ? <p className='text-error text-sm pl-5 mt-5' role="alert">Caution : All Fields Are Mandatory</p> : ''}
                <div className='my-7'>
                    <input className='btn btn-primary btn-block' type="submit" value="ADD" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;