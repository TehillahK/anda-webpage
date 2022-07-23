import Head from "next/head";
import Navbar from "../../../components/Navbar";
import MixingHeader from "../../../components/MixingHeader";
import MixingService from "../../../components/MixingService";
import MasteringService from "../../../components/MasteringService";
import Footer from "../../../components/Footer";

export default function MixingPage() {
    return(
        <div>
            <Head>
                <title>Mixing/Mastering</title>
            </Head>
            <div>
                <Navbar />

                <span className={"mt-96"}>.</span>

                <span className={"mt-96"}>.</span>
                <MixingService />
                <span className={"mt-96"}></span>
                <MasteringService />
            </div>
            <Footer />
        </div>
    )
}
