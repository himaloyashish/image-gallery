import React from 'react';
import './Navbar'

const Navbar = () => {

    return (
        <div className='flex justify-between ml-[120px] bannerBg  mr-[120px]  '>
            <ul>
                <li><img src="/src/assets/massart 1.png" alt="MassArt" /> </li>
            </ul>
            <ul className='flex gap-3'>
                <li className=''>GetTicket</li>
                <li>Schedules</li>
                <li>Speakers</li>
                <li>FAQ</li>
            </ul>
            <ul><li><button>Register</button></li></ul>
        </div>
    );
};

export default Navbar;