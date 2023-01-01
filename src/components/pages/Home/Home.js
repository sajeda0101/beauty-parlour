import React from 'react';
import Footer from '../shared/footer/Footer';
import Banner from './Banner/Banner';
import ImageSlider from './ImageSlider/ImageSlider';
import Services from './Services/Services';

const Home = () => {
   
    return (
      <div>
     <Banner/>
     {/* <ImageSlider/> */}
     <Services/>
     <Footer/>

            

      </div>
    );
};

export default Home;