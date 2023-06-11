import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useState } from 'react';

const ClassCard = ({ perClass }) => {
    const { _id, className, classImage, instructorName, instructorEmail, availableSeat, price, totalEnrolledStudent } = perClass;

    const [disable, setDisable] = useState(false)

    //user from firebase
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }

    const handleSelectClass = (id) => {
        const studentAddedClass = { classId: id, studentEmail: user.email, paymentStatus: 'pending' }
        axios.post(`http://localhost:3000/selectclass?email=${user?.email}`, studentAddedClass)
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
            <figure><img src={classImage} alt="Shoes" /></figure>
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