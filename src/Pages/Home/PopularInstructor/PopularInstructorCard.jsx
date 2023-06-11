import React from 'react';

const PopularInstructorCard = ({ ins }) => {
    const { displayName, email } = ins;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src='https://en.pimg.jp/047/504/268/1/47504268.jpg' alt="instructors" /></figure>
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