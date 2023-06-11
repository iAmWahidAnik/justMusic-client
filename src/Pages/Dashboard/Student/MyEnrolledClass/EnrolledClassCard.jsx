import React from 'react';

const EnrolledClassCard = ({ perClass }) => {
    const { _id, className, classImage, instructorName, instructorEmail, availableSeat, price, totalEnrolledStudent } = perClass;
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
                </div>
                <div>
                    <button className='btn btn-primary btn-sm my-3'>Continue Class</button>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClassCard;