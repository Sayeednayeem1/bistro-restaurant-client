import React from 'react';
import image from '../../../assets/home/chef-service.jpg';

const BistroBoss = () => {
    return (
        <section className="relative mb-16">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className='md:max-w-screen-lg mx-auto bg-white p-8 text-center text-black md:px-8 lg:px-16 xl:px-32 py-20 rounded-md'>
                    <h2 className='uppercase text-4xl mb-4'>Bistro boss</h2>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown, is dummy text used in laying out print.</p>
                </div>
            </div>
            <img src={image} alt="" className="w-full h-64 object-cover sm:h-auto" />
        </section>
    );
};

export default BistroBoss;
