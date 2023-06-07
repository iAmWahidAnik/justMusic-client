import React from 'react';
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="py-20 min-h-screen bg-[url('https://colorlib.com/etc/lf/Login_v9/images/bg-01.jpg')] bg-cover">
            <form className='shadow-2xl max-w-md rounded-2xl mx-auto bg-white p-20 flex flex-col gap-10'>
                <h1 className='text-3xl text-center font-bold text-rose-950'>Login</h1>
                <div className="form-control w-full max-w-xs">
                    {/* <label className="label">
                        <span className="label-text">What is your email?</span>
                    </label> */}
                    <input type="text" placeholder="username or email" className="input rounded-3xl py-8 w-full max-w-xs placeholder:font-bold placeholder:text-rose-950 shadow-xl" />
                </div>
                <div className="form-control w-full max-w-xs">
                    {/* <label className="label">
                        <span className="label-text">What is your email?</span>
                    </label> */}
                    <input type="password" placeholder="password" className="input rounded-3xl py-8 w-full max-w-xs placeholder:font-bold placeholder:text-rose-950 shadow-xl" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <input className='btn bg-rose-950 text-white rounded-3xl shadow-xl hover:bg-rose-900 hover:shadow-rose-950 hover:border-none transition-all duration-500 border-none' type="submit" value="Login" />
                </div>
                <div className="divider">OR</div>
                <div className='flex gap-5 mx-auto'>
                    <div>
                        <button className='btn btn-circle btn-lg'><FcGoogle className='text-3xl'></FcGoogle></button>
                    </div>
                    <div>
                        <button className='btn btn-circle btn-lg'><FaFacebookF className='text-3xl text-blue-600'></FaFacebookF></button>
                    </div>
                </div>
                <div>
                    <p className='text-center font-semibold'>new to justMusic? <Link className='text-primary' to='/register'>Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;