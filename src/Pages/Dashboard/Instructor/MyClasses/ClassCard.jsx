import React from 'react';

const ClassCard = ({ perClass }) => {
    const { className, classImage, instructorName, instructorEmail, availableSeat, totalEnrolledStudent, price, status, feedback } = perClass;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={classImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {className}
                    <div className="badge badge-primary">{status}</div>
                </h2>
                <p>{instructorName}</p>
                <p className='text-sm'>{feedback && `Feedback : ${feedback}`}</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">Available Seat : {availableSeat}</div>
                    <div className="badge badge-outline">Total Enrolled : {totalEnrolledStudent}</div>
                </div>
                <button className='btn btn-primary btn-sm my-3'>update</button>
            </div>
        </div>
    );
};

export default ClassCard;