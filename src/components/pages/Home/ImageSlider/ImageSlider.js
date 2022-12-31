import React, { useState } from 'react';
import './style.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";


import img1 from '../../../../assets/home/slide1.jpg'
import img2 from '../../../../assets/home/slide2.jpg'
import img3 from '../../../../assets/home/cat1.jpeg'
import img4 from '../../../../assets/home/slide4.jpg'
import img5 from '../../../../assets/home/slide5.jfif'

const ImageSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const images=[
        {url:img1,title:'bridal makeup',id:1},
        {url:img2,title:'',id:2},
        {url:img3,title:'',id:3},
        {url:img4,title:'',id:4},
        {url:img5,title:'',id:5}
    ]
 console.log(images)
    return (
<div>
<Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
            images.map(user=>
                <SwiperSlide>
                <img src={user.url} alt='' className='' />
              </SwiperSlide>
                )
        }
      
       
        
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>

</div>

    );
};

export default ImageSlider;