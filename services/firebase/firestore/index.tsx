import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "../config";

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const usersLinksCollection = db.collection("userLinks");

export const getDocument = (docID: string) => {
    return usersLinksCollection.doc(docID).get().then((doc) => {
        if (doc.exists) {
            return doc.data();
        } else {
            return null
        }
    }).catch((error) => error);
}