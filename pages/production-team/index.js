import Head from "next/head";
import Navbar from "../../components/Navbar";
import ProducerHeader from "../../components/ProducerHeader";
import ProducerBio from "../../components/ProducerBio";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import firebaseApp from "../../firebase/firebase.config";

export async function getServerSideProps() {
    // Fetch data from external API
    const querySnapshot = await getDocs(collection(getFirestore(firebaseApp), "producers"))
    const producers = [];
    querySnapshot.forEach((doc) => {

        // doc.data() is never undefined for query doc snapshots

        producers.push({id: doc.id, ...doc.data()})
    });

    // Pass data to the page via props
    return {props: {producers}};
}


export default function ProductionTeam({producers}) {
    console.log(producers)
    const numProducers = producers.length
    return (
        <div>
            <Head>
                <title>ANDA Producers | ANDA Records</title>
            </Head>

            <Navbar/>
            <ProducerHeader/>

            {

                producers.map((producer, index) => {
                    return (

                        <ProducerBio key={producer.id} photoUrl={producer.photoUrl} name={producer.name}
                                     bio={producer.bio}
                                     daws={producer.daws} instruments={producer.instruments}
                                     credits={producer.credits}/>
                    )
                })
            }


        </div>
    )
}
