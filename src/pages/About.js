import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BkForms from "../components/BkForms";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Mousewheel, Navigation } from "swiper";
import {social as rrss} from '../data/social';
import SocialMediaButton from "../components/SocialMediaButton";
import arrow from '../images/arrow-right.svg'
import { useState } from "react";


function About() {

  const swiper = useSwiper();
  const [swiperSlide, setSwiperSlide] = useState(null);

  return (
    <div className="about home-fifth">
      <Header
        animated={false}
      />
      <div className="main-container">
        <Swiper
          className="about-swiper"
          onSwiper={(number) => {
            setSwiperSlide(number);
          }}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          speed={1500}
          modules={[Mousewheel, Navigation]}
        >
          <SwiperSlide>
            <div className="slide-container">
              <Hero home>
                <p className="subtitle animate__animated animate__fadeIn animate__delay-1s">Un gusto conocerte!</p>
                <p className="subtitle animate__animated animate__fadeIn animate__delay-1s">Querés que te cuente un poco sobre mí?</p>
                <div className="arrow animate__animated animate__fadeIn animate__delay-1s">
                  <img 
                    src={arrow} 
                    alt="icon" 
                    onClick={() => swiperSlide.slideNext(1500)}
                  />
                </div>
              </Hero>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            Slide 2
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
      <BkForms/>
      <Footer
        animated={false}
        // handleSwitchValue={() => setAudioPlay(!audioPlay)}
        // switchValue={audioPlay}
      />
    </div>
  );

}

export default About;