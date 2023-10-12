// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEYB0xizI6r_uFhUeXEjt9x7MvDXDa8a0",
    authDomain: "shoorveer-6880c.firebaseapp.com",
    projectId: "shoorveer-6880c",
    storageBucket: "shoorveer-6880c.appspot.com",
    messagingSenderId: "684906100161",
    appId: "1:684906100161:web:1a96ec319c7d9947da6b40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const getDocuments = async () => {
    const querySnapshot = await getDocs(collection(db, "user"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
};


export { db, getDocuments };
