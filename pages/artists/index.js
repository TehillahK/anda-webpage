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
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import ArtistSlider from "../../components/ArtistSlider";


export async function getServerSideProps() {
    // Fetch data from external API
    const querySnapshot = await getDocs(collection(getFirestore(firebaseApp), "artists"))
    const artists = [];
    querySnapshot.forEach((doc) => {

        // doc.data() is never undefined for query doc snapshots

        artists.push({id: doc.id, ...doc.data()})
    });

    // Pass data to the page via props
    return {props: {artists}};
}

export default function ArtistsPage({artists}) {
    console.log(artists)
    return (
        <div>
            <Head>
                <title>ANDA Records | Artists</title>
                <meta name="description" content="ANDA is a rap and alternative R&B group with 10 artists and 6 producers" />
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

            </div>

            <AlbumsAd/>

            <Collaborators/>

            <Footer/>


        </div>
    )
}
