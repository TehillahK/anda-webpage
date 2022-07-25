import {collection, doc, getDocs, getFirestore, getDoc} from "firebase/firestore";
import firebaseApp from "../../firebase/firebase.config";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import ArtistHeader from "../../components/ArtistHeader";
import ArtistBio from "../../components/ArtistBio";
import ArtistDiscog from "../../components/ArtistDiscog";
import ArtistShows from "../../components/ArtistShows";
import Footer from "../../components/Footer";

export const getStaticPaths = async () => {
    const querySnapshot = await getDocs(collection(getFirestore(firebaseApp), "artists"))
    const artists = [];
    querySnapshot.forEach((doc) => {

        // doc.data() is never undefined for query doc snapshots

        artists.push({id: doc.id, ...doc.data()})
    });
   // console.log(artists)
    const paths = artists.map((artist) => {
        return {
            params: {id: artist.id},
        };
    });
    return {
        paths,
        fallback: false,
    };
};
export const getStaticProps = async (context) => {
    const id = context.params.id;

    const docRef = doc(getFirestore(firebaseApp), "artists", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    }
    else{
        console.log("doesnt exist")
    }
    return {
        props: {artist:docSnap.data()},
        revalidate: 60,
    };
}

export default function ArtistPage({artist}){
    const pageTitle = `${artist.name} | ANDA Artist`
    const discog = artist.discography;
    console.log(discog)
    return(
        <div>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <Navbar />
            <ArtistHeader type={artist.type} photoUrl={artist.photoUrl} name={artist.name} />
            <ArtistBio bio={artist.bio} />
            <ArtistDiscog discography={discog}  />
            <ArtistShows />
            <Footer />
        </div>
    )
}
