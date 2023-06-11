import React from 'react';

const InstructorCard = ({ ins }) => {
    const { displayName, email } = ins;
    // TODO: have to display instructors photo
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://www.shutterstock.com/image-vector/sample-red-square-grunge-stamp-260nw-338250266.jpg" alt="instructors" /></figure>
            <div className="card-body">
                <h2 className="card-title">{displayName}</h2>
                <p>{email}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;