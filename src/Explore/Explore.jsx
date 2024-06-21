import React from 'react';

const Explore = () => {
    return (
        <div className='bg-[#212525] pl-[120px] pr-[120px] pt-[150px]'>
            <p className='text-start text-white font-bold'>More Explore in Massart</p>
            <p className='text-start text-sm text-white '>Exclusive Content You Can Access</p>
            <nav className='md:flex gap-4 '>
                <a className=' explore ' href="#Original">Original Videos</a>
                <a className=' explore ' href="#Born">Born Today</a>
                <a className=' explore ' href="#News">Top News</a>
                <a className=' explore ' href="#Editor">Editor's Choice</a>
            </nav>

            <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;