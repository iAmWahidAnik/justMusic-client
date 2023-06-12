import React, { useContext, useState } from 'react';
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
    const { googleLogin, login } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [googleError, setGoogleError] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        login(data.email, data.password)
            .then(res => {
                setError('');
                navigate('/')
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
                    title: 'Login successful'
                })

            })
            .catch(error => {
                setError(error.message)
            })
    };


    const handleGoogleLogin = e => {
        e.preventDefault();
        googleLogin()
            .then(result => {
                setGoogleError('');
                const user = result.user;
                const userName = user.displayName;
                const userEmail = user.email;

                const newUser = { displayName: userName, email: userEmail, role: 'student' };
                axios.post('https://just-music-server-side.vercel.app/setuser', newUser)
                    .then(res => {
                        // console.log(res.data);
                        navigate('/');
                        if (res.data.insertedId) {
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
                                title: 'User Created successfully'
                            })
                        }
                    })
            })
            .catch(error => {
                const message = error.message;
                setGoogleError(message);
                const code = error.code;
            })
    }
    return (
        <div className="py-20 min-h-screen bg-[url('https://colorlib.com/etc/lf/Login_v9/images/bg-01.jpg')] bg-cover">
            <form onSubmit={handleSubmit(onSubmit)} className='shadow-2xl max-w-md rounded-2xl mx-auto bg-white p-20 flex flex-col gap-10'>
                <h1 className='text-3xl text-center font-bold text-rose-950'>Login</h1>
                <div className="form-control w-full max-w-xs">
                    {/* <label className="label">
                        <span className="label-text">What is your email?</span>
                    </label> */}
                    <input {...register("email", { required: true })} type="email" placeholder="username or email" className="input rounded-3xl py-8 w-full max-w-xs placeholder:font-bold placeholder:text-rose-950 shadow-xl font-bold text-rose-950 focus:outline-none" />
                    {errors.email?.type === 'required' && <p className='text-error text-sm pl-5 mt-5' role="alert">email is required</p>}
                </div>
                <div className="form-control w-full max-w-xs relative">
                    <input {...register("password", { required: true })} type={showPass ? 'text' : 'password'} placeholder="password" className="input rounded-3xl py-8 w-full max-w-xs placeholder:font-bold placeholder:text-rose-950 shadow-xl font-bold text-rose-950 focus:outline-none" />
                    <label className='absolute right-4 top-8'>
                        <AiFillEyeInvisible onClick={() => setShowPass(!showPass)} className={showPass ? 'text-xl' : 'hidden'}></AiFillEyeInvisible>

                        <AiFillEye onClick={() => setShowPass(!showPass)} className={showPass ? 'hidden' : 'text-xl'}></AiFillEye>
                    </label>
                    {errors.password?.type === 'required' && <p className='text-error text-sm pl-5 mt-5' role="alert">Password is required</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <input className='btn bg-rose-950 text-white rounded-3xl shadow-xl hover:bg-rose-900 hover:shadow-rose-950 hover:border-none transition-all duration-500 border-none' type="submit" value="Login" />
                </div>
                <p className='text-center text-red-600'>{error}</p>
                <div className="divider">OR</div>
                <div className='flex gap-5 mx-auto'>
                    <div>
                        <button onClick={handleGoogleLogin} className='btn btn-circle btn-lg'><FcGoogle className='text-3xl'></FcGoogle></button>
                    </div>
                    <div>
                        <button disabled className='btn btn-circle btn-lg'><FaFacebookF className='text-3xl text-blue-600'></FaFacebookF></button>
                    </div>
                </div>
                <p className='text-center text-red-600'>{googleError}</p>
                <div>
                    <p className='text-center font-semibold'>new to justMusic? <Link className='text-primary' to='/register'>Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;