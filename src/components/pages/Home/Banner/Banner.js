import React from 'react';
import banner from '../../../../assets/home/banner.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner} className="w-full" />
          <div className="absolute  transform -translate-y-1/2 left-5 text-white right-5 top-1/2">
            <h3 className='lg:text-4xl text-2xl w-2/4 mb-4 text-pink-500'>Enjoy Professional Beauty Services!</h3>
            <p className='w-2/4 lg:w-2/5  lg:text-xl'>A beauty parlor is a place where people can go to have beauty treatments, for example to have their hair, nails, or makeup done.A beauty salon or beauty parlor is an establishment dealing with cosmetic treatments for people.</p>
          </div>
        </div>
      </div>
    );
};

export default Banner;