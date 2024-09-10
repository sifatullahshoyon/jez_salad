import React from 'react';
import FoodCard from '../Cards/FoodCard';

const Food = () => {
    return (
        <section>
            {/* Heading */}
            <div className='md:flex md:flex-row justify-between items-center mb-16 space-y-5 px-5 lg:px-0'>
                <p className='text-2xl lg:text-5xl font-semibold leading-normal text-dark-two-color text-balance'>WHY CHOOSE US <br />For <span className='text-primary-color'>YOUR HEALTHY FOOD</span></p>
                <p className='text-secondary-color text-balance text-base lg:text-xl leading-normal'>We continue to consistently choose and <br /> maintain the quality of the fruit served, so that <br /> it remains fresh and nutritious when you eat it.</p>
            </div>
            {/* Content */}
            <FoodCard />
        </section>
    );
};

export default Food;