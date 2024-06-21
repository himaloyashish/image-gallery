import React from 'react';
import './Navbar'

const Navbar = () => {

    return (
        <div className='flex justify-between pl-[120px] bg-black pt-5  pr-[120px]  '>
            <ul>
                <li><img src="/src/assets/massart 1.png" alt="MassArt" /> </li>
            </ul>
            <ul className='flex gap-3'>
                <li className='text-white'>GetTicket</li>
                <li className='text-white' >Schedules</li>
                <li className='text-white' >Speakers</li>
                <li className='text-white' >FAQ</li>
            </ul>
            <ul><li><button className='text-white' >Register</button></li></ul>
        </div>
    );
};

export default Navbar;