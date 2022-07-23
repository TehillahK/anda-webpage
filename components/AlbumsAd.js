import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination ,Navigation,Autoplay} from "swiper";

function AlbumCube() {
    return(
        <Swiper
            effect={"cube"}
            autoplay={true}

            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube,Navigation,Autoplay]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={30}

        >
            <SwiperSlide>
                <div className={"w-fit"}>
                    <img className={"max-w-md"} src="/phase1.png" />
                    <h2 className={"text-center text-2xl font-bold text-black"}>Phase 1 by ANDA</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"w-fit"}>
                    <img className={"max-w-md"} src="/stockholm.png" />
                    <h2 className={"text-center text-2xl font-bold text-black"}>Stockholm by DAE the VIDEO</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"w-fit"}>
                    <img className={"max-w-md"} src="/phase2.png" />
                    <h2 className={"text-center text-2xl font-bold text-black"}>Phase 2 by ANDA</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"w-fit"}>
                    <img className={"max-w-sm"} src="/maryland.png" />
                    <h2 className={"text-center text-2xl font-bold text-black"}>Maryland by Ri</h2>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}




const AlbumsAd = () => {
    return(
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 mt-9">
            <div className="hero-content text-center">
                <div className="max-w-xs">
                    <h1 className="text-5xl font-bold mb-3">Our Albums</h1>
                    <div>
                        <AlbumCube />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlbumsAd;
