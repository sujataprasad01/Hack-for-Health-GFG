// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, addDoc, collection } from "@firebase/firestore";
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

const paitientCol = collection(db, "paitient");
const volunteerCol = collection(db, "volunteer");

const getDocuments = async () => {
    const querySnapshot = await getDocs(paitientCol);
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
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
                type:"pet"
            })
        );
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
                type: "vol"
            })
        );
    } catch (er) {
        if (er) console.log(er);
    }
};

export { db, getDocuments, setNewUser, setNewVolunteer };