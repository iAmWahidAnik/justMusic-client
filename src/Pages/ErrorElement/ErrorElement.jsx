import React from 'react';

const ErrorElement = () => {
    return (
        <footer className="hero min-h-screen bg-[url('https://cdn.pixabay.com/photo/2019/07/15/23/51/magnifying-4340698_1280.jpg')]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-7xl font-bold">404!</h1>
                    <p className="mb-5">looks like, you've been lost somewhere. <br /> Might be you've type a wrong URL</p>
                    <button className="btn btn-primary">Go Home</button>
                </div>
            </div>
        </footer>
    );
};

export default ErrorElement;