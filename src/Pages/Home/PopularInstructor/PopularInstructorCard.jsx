import React from 'react';

const PopularInstructorCard = ({ ins }) => {
    const { displayName, email, photoURL } = ins;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-96 object-cover w-full' src={photoURL} alt="instructors" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {displayName}
                </h2>
                <p className='font-semibold my-3'>{email}</p>
                <div>
                    <button className='btn btn-error btn-sm my-3'>see classes</button>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructorCard;