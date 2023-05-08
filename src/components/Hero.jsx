import React from 'react';
import Navbar from './Navbar';

import hero from '../assets/rivermate-family.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <Navbar />
            <div className='relative p-[116px_0_0_0] mb-[14px] md:p-[80px_0_0_0] sm:p-[68px_0_0_0]'>
                <div className='p-[112px_0] flex justify-center text-center md:p-[84px_0] sm:p-[70px_0]'>
                    <div className="main-container">
                        <div className='w-full max-w-[830px] m-[0_auto] flex flex-col items-center justify-center'>
                            <img src={hero} alt="hero rivermate" className='max-h-[280px] mb-[28px]' />
                            <h1 className='text-[64px] font-[900] leading-[1em] mb-[21px] tracking-[-0.01em] md:text-[54px] sm:text-[32px] sm:mb-[14px] sm:leading-[1.2em]'>Hire anyone, anywhere.</h1>
                            <div className='text-[24px] leading-[34px] md:text-[20px] md:leading-[30px] sm:text-[17px] sm:leading-[27px]'>Hire remote employees anywhere in the world 🌎</div>
                            <div className='flex items-center flex-row justify-center mt-[28px]'>
                                <Link className='cta' to='/'>Get Started</Link>
                                <Link className='cta_2' to='/'>Book a call</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;