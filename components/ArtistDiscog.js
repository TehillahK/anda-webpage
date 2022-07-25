import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";

import { EffectFlip, Pagination, Navigation } from "swiper";
import Image from "next/image";


function Album() {
  return(
      <div>
        <Image src="https://firebasestorage.googleapis.com/v0/b/anda-website-24a18.appspot.com/o/stwave-saucy.jpg?alt=media&token=00816de3-e715-4f9c-aea1-1bc9a4cd588b" height={500} width={500} objectFit={"cover"} />
        <button className="btn btn-primary">Download</button>
      </div>
  )
}


function Music() {
  return(
      <Swiper
          effect={"flip"}
          grabCursor={true}

          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper"
      >
        <SwiperSlide>
            <Album />
        </SwiperSlide>
        <SwiperSlide>
            <Album />
        </SwiperSlide>

      </Swiper>
  )
}

const ArtistDiscog = () => {
  return(
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-xs">
            <h1 className="text-5xl font-bold mb-6">Discography</h1>
            <Music />
          </div>
        </div>
      </div>
  )
}

export default ArtistDiscog
