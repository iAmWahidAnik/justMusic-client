import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ClassCard from './classCard';

const PopularClass = () => {
    const {data: popularClasses = [], isLoading, refetch} = useQuery({
        queryKey: ['popularCLasses'],
        queryFn: async() => {
            const response = axios.get('http://localhost:3000/popularclass')
            return response;;
        }
    })
    if (isLoading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }
    const classes = popularClasses?.data;
    return (
        <div className='my-20 grid grid-cols-3  gap-5'>
            {
                classes.map(perClass => <ClassCard key={perClass._id} perClass={perClass}></ClassCard>)
            }
            {/* <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default PopularClass;