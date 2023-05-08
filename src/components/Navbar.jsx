import React, { useState } from 'react';

import logo from '../assets/rivermate.svg';
import { FiArrowUpRight } from 'react-icons/fi';
import { navItems } from './MenuItems';
import { Link } from 'react-router-dom';
import Howitswork from './Dropdowns/Howitwork';
import Companydrop from './Dropdowns/Companydrop';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [menu, setMenu] = useState(false);

    const changeState = () => {
        if (window.scrollY >= 20) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    window.addEventListener('scroll', changeState);

    return (
        <>
        <div className='fixed w-full p-[0_14px] z-[20] bg-[#fff5ed] md:p-0 md:bg-[#fff]'>
            <div className='relative w-full p-[18px_28px] m-[14px_0] bg-[transparent] md:m-0 md:p-[14px_21px]'>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-start'>
                        <a href="#" className='mr-[42px] pb-[7px]'><img src={logo} alt="logo" className='h-[22px] object-cover' /></a>
                        <ul className='flex items-center flex-wrap lg:hidden'>
                            {navItems.map((item) => {
                                if(item.title === "How it works") {
                                    return (
                                        <li key={item.id} className={item.cName} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                                            <Link to={item.path}>{item.title}</Link>
                                            {dropdown && <Howitswork />}
                                        </li>
                                    )
                                }
                                if(item.title === "Company") {
                                    return (
                                        <li key={item.id} className={item.cName} onMouseEnter={() => setDropdown1(true)} onMouseLeave={() => setDropdown1(false)}>
                                            <Link to={item.path}>{item.title}</Link>
                                            {dropdown1 && <Companydrop />}
                                        </li>
                                    )
                                }
                                return (
                                    <li key={item.id} className={item.cName}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='flex items-center gap-[21px]'>
                        <a href="#" className='flex items-center md:hidden'>
                            <span className='font-[600] text-[16px]'>Login</span>
                            <FiArrowUpRight className='h-[21px] ml-[5px]' />
                        </a>
                        <a href="#" className='p-[10px_21px] bg-[#000] text-[#fff] font-[600] rounded-[10px] text-[16px] hover:opacity-[0.8] sm:hidden'>Get started</a>
                        <a href="#" className='p-[10px_21px] border-[2px] border-[#000] text-[#0f0f0f] font-[600] rounded-[10px] text-[16px] sm:hidden'>Book a call</a>
                        <div className='w-[40px] h-[40px] flex flex-col items-center hidden justify-center gap-[7px] cursor-pointer lg:flex' onClick={() => setMenu(true)}>
                            <div className='w-[40px] h-[2px] bg-[#000]'></div>
                            <div className='w-[40px] h-[2px] bg-[#000]'></div>
                            <div className='w-[40px] h-[2px] bg-[#000]'></div>
                        </div>
                    </div>
                </div>
                <div className={show ? 'navbar-bg opacity-[1]' : 'navbar-bg opacity-0'}></div>
            </div>
        </div>
            {menu && (
                <motion.div initial={{ y: '-350px', opacity: 0 }} animate={{ y: '0', opacity: 1 }} className='fixed top-[116px] left-0 w-full p-[0_14px] z-[2] lg:top-[100px] md:top-[76px] sm:top-[68px] sm:p-0'>
                    <div className='bg-[#fff] rounded-[14px] p-[14px_21px]'>
                        <ul className='flex items-start flex-col'>
                                {navItems.map((item) => {
                                    if(item.title === "How it works") {
                                        return (
                                            <li key={item.id} className={item.cName} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                                                <Link to={item.path}>{item.title}</Link>
                                                {dropdown && <Howitswork />}
                                            </li>
                                        )
                                    }
                                    if(item.title === "Company") {
                                        return (
                                            <li key={item.id} className={item.cName} onMouseEnter={() => setDropdown1(true)} onMouseLeave={() => setDropdown1(false)}>
                                                <Link to={item.path}>{item.title}</Link>
                                                {dropdown1 && <Companydrop />}
                                            </li>
                                        )
                                    }
                                    return (
                                        <li key={item.id} className={item.cName}>
                                            <Link to={item.path}>{item.title}</Link>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Navbar;