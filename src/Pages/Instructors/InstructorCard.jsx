import React from 'react';

const InstructorCard = ({ ins }) => {
    const { displayName, email, photoURL } = ins;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='object-cover h-80 w-52' src={photoURL} alt="instructors" /></figure>
            <div className="card-body">
                <h2 className="card-title">{displayName}</h2>
                <p>{email}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;