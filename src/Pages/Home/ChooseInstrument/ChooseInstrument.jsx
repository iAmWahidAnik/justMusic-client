import React from 'react';
import { GiGuitar, GiGrandPiano, GiViolin, GiSaxophone, GiGuitarBassHead,GiMicrophone } from 'react-icons/gi';

const ChooseInstrument = () => {
    return (
        <div className='my-20'>
            <h1 className='text-5xl font-semibold text-primary border-l-8 border-primary pl-3'>Let's Start</h1>
            <p className='text-gray-500 ml-5 my-3'>Choose Your Instrument</p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 text-center my-5'>
                <div>
                    <GiGuitar className='text-9xl mx-auto text-gray-700 hover:text-error transition-colors duration-700'></GiGuitar>
                    <p className='text-2xl text-gray-500 my-5'>Guitar</p>
                </div>
                <div>
                    <GiGrandPiano className='text-9xl mx-auto text-gray-700 hover:text-error transition-colors duration-700'></GiGrandPiano>
                    <p className='text-2xl text-gray-500 my-5'>Piano</p>
                </div>
                <div>
                    <GiViolin className='text-9xl mx-auto text-gray-700 hover:text-error transition-colors duration-700'></GiViolin>
                    <p className='text-2xl text-gray-500 my-5'>Violin</p>
                </div>
                <div>
                    <GiSaxophone className='text-9xl mx-auto text-gray-700 hover:text-error transition-colors duration-700'></GiSaxophone>
                    <p className='text-2xl text-gray-500 my-5'>Saxophone</p>
                </div>
                <div>
                    <GiGuitarBassHead className='text-9xl mx-auto text-gray-700 hover:text-error transition-colors duration-700'></GiGuitarBassHead>
                    <p className='text-2xl text-gray-500 my-5'>Bass Guitar</p>
                </div>
                <div>
                    <GiMicrophone className='text-9xl mx-auto text-gray-700 hover:text-error transition-colors duration-700'></GiMicrophone>
                    <p className='text-2xl text-gray-500 my-5'>Vocal</p>
                </div>
            </div>
            <div className='text-center py-5'>
            <button className='btn btn-primary'>more class</button>
            </div>
        </div>
    );
};

export default ChooseInstrument;