import {collection, doc, setDoc, getDocs, getFirestore} from "firebase/firestore";
import firebaseApp from "../../firebase/firebase.config";

export default async function handler(req, res) {
    const querySnapshot = await getDocs(collection(getFirestore(firebaseApp), "artists"))
    const documents = [];
    querySnapshot.forEach((doc) => {

        // doc.data() is never undefined for query doc snapshots

        documents.push({ id: doc.id, ...doc.data() })
    });

    res.status(200).json(documents)
}
