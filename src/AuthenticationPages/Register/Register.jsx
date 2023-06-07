import React, { useState } from 'react';
// import PhoneInput from 'react-phone-number-input';
// import 'react-phone-number-input/style.css'
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const Register = () => {
    // const [value, setValue] = useState('');
    const [passError, setPassError] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setPassError('');
        if (data.password !== data.rePassword) {
            return setPassError("password didn't matched properly");
        }
        console.log(data)
    };
    return (
        <div className='bg-pink-500 min-h-screen p-20'>
            <div className='bg-black max-w-3xl mx-auto rounded-lg flex gap-10 shadow-2xl'>
                <div className="w-1/2">
                    <img className='rounded-lg w-full h-full object-cover' src="https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1367&q=80" alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 flex flex-col gap-5 py-10' action="">
                    <h1 className='text-2xl text-white'>Registration <span className='font-bold'>justMusic</span></h1>
                    {/* name  */}
                    <div>
                        <input {...register("name", { required: true })} type="text" placeholder="Name" className="input bg-transparent border-b-2 border-white border-0 rounded-none w-full max-w-xs text-white placeholder:font-bold focus:outline-none" />
                        {errors.password?.type === 'required' && <p className='text-error text-sm pl-5 mt-5' role="alert">password is required</p>}
                    </div>
                    {/* email  */}
                    <div>
                        <input {...register("email", { required: true })} type="email" placeholder="Email" className="input bg-transparent border-b-2 border-white border-0 rounded-none w-full max-w-xs text-white placeholder:font-bold focus:outline-none" />
                        {errors.password?.type === 'required' && <p className='text-error text-sm pl-5 mt-5' role="alert">password is required</p>}
                    </div>
                    {/* photo URL  */}
                    <div>
                        <input {...register("photo", { required: true })} type="url" placeholder="photo url" className="input bg-transparent border-b-2 border-white border-0 rounded-none w-full max-w-xs text-white placeholder:font-bold focus:outline-none" />
                        {errors.password?.type === 'required' && <p className='text-error text-sm pl-5 mt-5' role="alert">password is required</p>}
                    </div>
                    {/* Gender  */}
                    <select {...register("gender")} className="select select-ghost w-full border-b-2 bg-transparent border-white border-0 rounded-none text-white focus:outline-none max-w-xs">
                        <option disabled selected>Select your gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Rather Not To Say</option>
                    </select>
                    {/* phone number  */}
                    <div>
                        {/* <PhoneInput className='max-w-xs'
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue} /> */}

                        <input {...register("phone")} type="tel" placeholder="phone number" className="input bg-transparent border-b-2 border-white border-0 rounded-none w-full max-w-xs text-white placeholder:font-bold focus:outline-none" />
                    </div>
                    {/* address  */}
                    <div>
                        <input {...register("address")} type="text" placeholder="address" className="input bg-transparent border-b-2 border-white border-0 rounded-none w-full max-w-xs text-white placeholder:font-bold focus:outline-none" />
                    </div>
                    {/* password  */}
                    <div>
                        <input {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/})} type="password" placeholder="password" className="input bg-transparent border-b-2 border-white border-0 rounded-none w-full max-w-xs text-white placeholder:font-bold focus:outline-none" />
                        {errors.password?.type === 'required' && <p className='text-error text-sm pl-5 mt-5' role="alert">password is required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-error text-sm pl-5 mt-5' role="alert">Password must have 6 character or more</p>}
                        {errors.password?.type === 'pattern' && <p className='text-error text-sm pl-5 mt-5' role="alert">Password must have one uppercase and one special character</p>}
                    </div>
                    {/* Confirm Password  */}
                    <div>
                        <input {...register("rePassword", { required: true })} type="password" placeholder="confirm Password" className="input bg-transparent border-b-2 border-white border-0 rounded-none w-full max-w-xs text-white placeholder:font-bold focus:outline-none" />
                        <p className='text-error text-sm pl-5 mt-5' role="alert">{passError}</p>
                    </div>
                    <div>
                        <input className='btn bg-white font-bold rounded-3xl hover:translate-x-2' type="submit" value="Register" />
                    </div>
                    <div className="divider text-white">OR</div>
                    <div className='flex gap-5 mx-auto'>
                        <div>
                            <button className='btn btn-circle'><FcGoogle className='text-3xl'></FcGoogle></button>
                        </div>
                        <div>
                            <button className='btn btn-circle'><FaFacebookF className='text-3xl text-blue-600'></FaFacebookF></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;