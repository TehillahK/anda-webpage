import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar";
import HeroAd from "../components/HeroAd";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function Home() {
    return (
        <div>
            <Head>
                <title>ANDA Records</title>
                <meta name="description"
                      content="ANDA is a rap and alternative R&B group with 10 artists and 6 producers. It was Created in January 2021, along with its namesake ANDA Records, a label for the members of the group, founded on collectivist values. "/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <HeroAd/>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <Image src={"/group.png"} width={800} height={500} objectFit={"cover"}/>
                        <h1 className="text-5xl font-bold">Who are we?</h1>
                        <p className="py-6"> A rap group bringing creativity to commercially viable Hip-Hop and R&B.
                            Members as young as 14 and as old as 28.</p>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content text-center">
                    <div className="max-w-fit">
                        <h1 className="text-5xl font-bold">Our Services</h1>

                        <Services/>

                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-full">
                        <h1 className="text-5xl font-bold mb-3">Dive into our music</h1>
                        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                        <iframe
                            style={{borderRadius: "2rem"}}
                            src="https://open.spotify.com/embed/playlist/0HMBM7vZbznny2zxxBeVZy?utm_source=generator"
                            width="100%"
                            height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media"/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}
