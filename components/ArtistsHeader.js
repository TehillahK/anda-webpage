import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import Image from "next/image";

import { EffectCards } from "swiper";


function ArtistsCard(){
    return(
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>

        </Swiper>
    )

}
const ArtistsHeader = () => {
  return(

      <div className="hero min-h-screen   bg-transparent " >
          <div className="hero-content flex-col lg:flex-row">
              <div >
                  <h1 className="text-5xl font-bold">Artists</h1>
                  <p className="text-2xl py-6 "> ANDA focuses on applying commercially
                      viable lenses in:</p>
                  <ul>
                      <li className={"text-2xl"}>Hip Hop/rap</li>
                      <li className={"text-2xl"}>R&B</li>
                      <li className={"text-2xl"}>Drill</li>
                      <li className={"text-2xl"}>Hardcore trap-metal</li>
                      <li className={"text-2xl"}>Crate-digger jazz-rap</li>
                  </ul>

              </div>
          </div>
      </div>

  )
}

export default ArtistsHeader;
