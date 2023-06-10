import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const MyClassCard = ({ myClass, refetch }) => {
    const { _id, classId, className, classImage, instructorName, instructorEmail, availableSeat, price, totalEnrolledStudent } = myClass;

    const handleDelete = id => {
        axios.delete(`http://localhost:3000/deletmyclass/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: 'class deleted successfully'
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
                    <button className='btn btn-primary btn-sm my-3 mx-2'>pay</button>
                    <button onClick={() => handleDelete(_id)} className='btn btn-error btn-sm my-3 mx-2'>delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyClassCard;