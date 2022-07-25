import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";

import { EffectFlip, Pagination, Navigation } from "swiper";
import Image from "next/image";


function Album(props) {
    const photoUrl = props.photoUrl;
    const link = props.link;
    const title = props.title;
  return(
      <div>
        <Image src={photoUrl} height={500} width={500} objectFit={"cover"} />
          <h3 className={"mb-3 mt-3"}>{title}</h3>
          <p  className={"mb-3"}>Released on May 26,2022</p>

        <a href={link} className="btn btn-primary">Download</a>
      </div>
  )
}


function Music(props) {
    const albums=props.albums;
  return(
      <Swiper
          effect={"flip"}
          grabCursor={true}

          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper"
      >

          {
              albums.map(
                  (album)=>{
                      return(
                          <SwiperSlide key={album.title}>
                              <Album title={album.title} link={album.link} photoUrl={album.photoUrl} />
                          </SwiperSlide>
                      )

                  }
              )
          }


      </Swiper>
  )
}

const ArtistDiscog = (props) => {
    const albums = props.discography;
  return(
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-xs">
            <h1 className="text-5xl font-bold mb-6">Discography</h1>
            <Music albums={albums} />
          </div>
        </div>
      </div>
  )
}

export default ArtistDiscog
