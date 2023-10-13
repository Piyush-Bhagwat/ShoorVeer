// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, addDoc, collection, deleteDoc, doc } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFJnKQdeNInNZk2tl8PBQNwtAkd1jPBa8",
    authDomain: "cafemangement.firebaseapp.com",
    projectId: "cafemangement",
    storageBucket: "cafemangement.appspot.com",
    messagingSenderId: "333819729730",
    appId: "1:333819729730:web:76dc32ceb03455f85a1adb"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const paitientCol = collection(db, "paitient");
const volunteerCol = collection(db, "volunteer");
const requestCol = collection(db, "requests");

const getPaitients = async (id) => {
    let data;
    const querySnapshot = await getDocs(paitientCol);
    querySnapshot.forEach((doc) => {
        if(doc.id === id){
            data = doc.data();
        }
    });

    return data;
};
const getVolunteers = async (category) => {
    let dat = [];
    const querySnapshot = await getDocs(volunteerCol);
    querySnapshot.forEach((doc) => {
        if(doc.data().service === category){
            dat.push([doc.data(), doc.id]);
        }
    });
    return dat;
};

const getLogin = async (data) => {
    console.log("Login", data.email);
    const querySnapshotPat = await getDocs(paitientCol);
    querySnapshotPat.forEach((doc) => {
        if (
            doc.data().email === data.email &&
            doc.data().password === data.pass
        ) {
            localStorage.setItem(
                "userInfo",
                JSON.stringify({
                    uid: doc.id,
                    name: doc.data().name,
                    email: doc.data().email,
                    type: "pet",
                   
                })
            );

            window.location.reload();
        }
    });
    const querySnapshotVol = await getDocs(volunteerCol);
    querySnapshotVol.forEach((doc) => {
        if (
            doc.data().email === data.email &&
            doc.data().password === data.pass
        ) {
            localStorage.setItem(
                "userInfo",
                JSON.stringify({
                    uid: doc.id,
                    name: doc.data().name,
                    email: doc.data().email,
                    type: "vol",
                    location: doc.data().address
                })
            );

            window.location.reload();
        }
    });
};

const setNewUser = async (data) => {
    try {
        const docRef = await addDoc(paitientCol, data);

        localStorage.setItem(
            "userInfo",
            JSON.stringify({
                uid: docRef.id,
                name: data.name,
                email: data.email,
                type: "pet",
            })
        );
        window.location.reload();
    } catch (er) {
        if (er) console.log(er);
    }
};

const setNewVolunteer = async (data) => {
    try {
        const docRef = await addDoc(volunteerCol, data);
        localStorage.setItem(
            "userInfo",
            JSON.stringify({
                uid: docRef.id,
                name: data.name,
                email: data.email,
                type: "vol",
                location: data.address
            })
        );
        window.location.reload();
    } catch (er) {
        if (er) console.log(er);
    }
};

const makeRequest = async (data) => {
    try {
        const docRef = await addDoc(requestCol, data);
    } catch (er) {
        if (er) {
            console.log(er);
        }
    }
};

const getRequest= async (vid) => {
    const querySnapshot = await getDocs(requestCol);

    let returnedData; 

    querySnapshot.forEach((doc) => {
        if(doc.data().vid === vid){
            // console.log("Found Reqqqqqqqqqqqquest");
            returnedData = {...doc.data(), id: doc.id};
        }
    });

    return returnedData;
}

const deleteRequest = async (id) => {
    await deleteDoc(doc(db, "requests", id));
}

export {
    db,
    getPaitients,
    getVolunteers,
    makeRequest,
    deleteRequest,
    getRequest,
    getLogin,
    setNewUser,
    setNewVolunteer,
};
