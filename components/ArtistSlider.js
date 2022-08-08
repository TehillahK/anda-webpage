import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow} from "swiper";
import ArtistCard from "./ArtistCard";

function Slider(props) {
    const artists = props.artists;
    return(
        <Swiper
            loop={true}
            centeredSlides={true}
            pagination={{clickable: true}}
            effect="coverflow"
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
            }}
          //  slidesPerView={3}


            grabCursor={true}
            modules={[EffectCoverflow]}

            slidesPerView={3}
        >
            {
                artists.map(
                    (artist) => {
                        return (
                            <SwiperSlide key={artist.id}>
                                <ArtistCard photoUrl={artist.photoUrl} name={artist.name} type={artist.type}
                                            country={artist.country} city={artist.city} id={artist.id}/>
                            </SwiperSlide>
                        )
                    }
                )
            }


        </Swiper>
    )
}

const ArtistSlider =(props)=>{
    const artists = props.artists
    return(
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-center">
                <div className=" max-w-md  lg:max-w-screen-lg">
                    <h1 className="text-5xl font-bold text-center pb-6 ">The Roster</h1>
                   <Slider artists={artists} />
                </div>
            </div>
        </div>
    )
}

export default ArtistSlider;
