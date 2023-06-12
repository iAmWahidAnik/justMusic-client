import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ClassCard = ({ perClass }) => {
    const { _id, className, classImage, instructorName, instructorEmail, availableSeat, price, totalEnrolledStudent } = perClass;
    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();

    //user from firebase
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }

    const handleSelectClass = (id) => {
        {
            !user && Swal.fire({
                title: 'Please Log-in First',
                text: "Log-in to select the class",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'go to login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
        const token = localStorage.getItem('token');
        if (!token) {
            return
        }
        const studentAddedClass = { classId: id, studentEmail: user.email, paymentStatus: 'pending' }
        axios.post(`https://just-music-server-side.vercel.app/selectclass?email=${user?.email}`, studentAddedClass, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.data.insertedId) {
                    setDisable(true)
                    Swal.fire({
                        icon: 'success',
                        title: `${className} Added Successfully`
                    });
                }
                else if (res.data.matched) {
                    setDisable(true)
                    Swal.fire({
                        icon: 'info',
                        title: `${className} Already in you class list`
                    });
                }
            })
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-56 w-full object-cover' src={classImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {className}
                    <div className="badge badge-error">{totalEnrolledStudent} students</div>
                </h2>
                <p className='font-semibold my-3'>Instructor : {instructorName}</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">{availableSeat} seat available</div>
                    <div className="badge badge-outline">price : ${price}</div>
                </div>
                <div>
                    <button disabled={disable} onClick={() => handleSelectClass(_id)} className='btn btn-error btn-sm my-3'>select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;