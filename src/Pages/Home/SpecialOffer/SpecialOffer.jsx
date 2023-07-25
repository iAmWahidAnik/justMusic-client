import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlinePersonalInjury, MdAvTimer } from 'react-icons/md';

const SpecialOffer = () => {
    return (
        <div className='my-20'>
            <h1 className='text-5xl font-semibold text-primary border-l-8 border-primary pl-3'>Special Offer</h1>
            <p className='text-gray-500 ml-5 my-3'>Today's Offer</p>
            <div className='flex justify-center items-center gap-5'>
                <div>
                    <img src="https://tabula.bold-themes.com/shady/wp-content/uploads/sites/4/2019/03/inner_girl.png" alt="SO" />
                </div>
                <div className='text-center'>
                    <p className='text-xl uppercase font-semibold text-gray-500'>Special Offer</p>
                    <h1 className='text-4xl font-bold text-primary my-3'>Guitar Lessons</h1>
                    <p className='text-7xl font-bold text-gray-500 my-3'>$299</p>
                    <div className='flex divide-x-2'>
                        <div className='p-5'>
                            <AiOutlineCalendar className='text-3xl mx-auto my-3 text-primary'></AiOutlineCalendar>
                            <p className='uppercase font-semibold text-gray-500'>Monday</p>
                            <p className='text-primary'>3AM - 5PM</p>
                        </div>
                        <div className='p-5'>
                            <MdOutlinePersonalInjury className='text-3xl mx-auto my-3 text-primary'></MdOutlinePersonalInjury>
                            <p className='uppercase font-semibold text-gray-500'>Teacher</p>
                            <p className='text-primary'>Oni Hasan</p>
                        </div>
                        <div className='p-5'>
                            <MdAvTimer className='text-3xl mx-auto my-3 text-primary'></MdAvTimer>
                            <p className='uppercase font-semibold text-gray-500'>Duration</p>
                            <p className='text-primary'>10 weeks</p>
                        </div>
                    </div>
                    <div className='my-5'>
                        <button className='btn btn-primary'>Apply Today</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;