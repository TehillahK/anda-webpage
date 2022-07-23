import Head from "next/head";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import {Swiper, SwiperSlide} from "swiper/react";
import ArtistCard from "../../components/ArtistCard";
import Navbar from "../../components/Navbar";
import ArtistsHeader from "../../components/ArtistsHeader";
import Footer from "../../components/Footer";
import AlbumsAd from "../../components/AlbumsAd";
import Collaborators from "../../components/Collaborators";

export default function ArtistsPage () {
    return(
        <div>
            <Head>
                <title>Artists</title>
            </Head>
            <Navbar />
            <ArtistsHeader />
            <h1 className="text-5xl font-bold text-center pb-6">The Roster</h1>
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
            <AlbumsAd />
            <Collaborators />
            <Footer />
        </div>
    )
}
