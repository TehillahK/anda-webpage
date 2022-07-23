import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow} from "swiper";
import ArtistCard from "./ArtistCard";

function Slider() {
    return(
        <Swiper
            navigation
            pagination={{ clickable: true }}
            effect="coverflow"
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
            }}
            slidesPerView={3}
            centeredSlides

            grabCursor={true}
            modules={[EffectCoverflow]}

        >
            <SwiperSlide>
                <ArtistCard />
            </SwiperSlide>
            <SwiperSlide>
                <ArtistCard />
            </SwiperSlide>
            <SwiperSlide>
                <ArtistCard />
            </SwiperSlide>

        </Swiper>
    )
}

const ArtistSlider =()=>{
    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                   <Slider />
                </div>
            </div>
        </div>
    )
}

export default ArtistSlider;
