import Head from "next/head";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import {EffectCoverflow, Pagination} from "swiper";

import {Swiper, SwiperSlide} from "swiper/react";
import ArtistCard from "../../components/ArtistCard";
import Navbar from "../../components/Navbar";
import ArtistsHeader from "../../components/ArtistsHeader";
import Footer from "../../components/Footer";
import AlbumsAd from "../../components/AlbumsAd";
import Collaborators from "../../components/Collaborators";
import {Parallax, ParallaxLayer} from '@react-spring/parallax'

import {useCollection} from "react-firebase-hooks/firestore";
import firebaseApp from "../../firebase/firebase.config"
import { getFirestore, collection } from 'firebase/firestore';


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch("http://localhost:3000/api/artists");
    const artists  = await res.json();


    // Pass data to the page via props
    return {props: {artists}};
}
export default function ArtistsPage({artists}) {
   console.log(artists)
    return (
        <div>
            <Head>
                <title>Artists</title>
            </Head>

                    <header className={"bg-gradient-to-r from-indigo-500 mb-12  "}>
                        <Navbar/>
                        <ArtistsHeader/>
                    </header>

                    <div>
                    <h1 className="text-5xl font-bold text-center pb-6 ">The Roster</h1>
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
                        slidesPerView={3}


                        grabCursor={true}
                        modules={[EffectCoverflow]}

                    >
                        <SwiperSlide>
                            <ArtistCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ArtistCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ArtistCard/>
                        </SwiperSlide>

                    </Swiper>
                    </div>

                    <AlbumsAd/>

                    <Collaborators/>

                    <Footer />


        </div>
    )
}
