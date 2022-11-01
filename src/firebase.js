// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdgbi1z7iuu-e3pA_PAmweyI0qfH3vnjg",
    authDomain: "proyecto-ing2-software.firebaseapp.com",
    projectId: "proyecto-ing2-software",
    storageBucket: "proyecto-ing2-software.appspot.com",
    messagingSenderId: "512142491132",
    appId: "1:512142491132:web:6772c063697e10038f4679"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}