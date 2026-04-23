
import { initializeApp } from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC8mmTBo8FI1ZbzmF59_HGpDilgSgimwlg",
    authDomain: "e-commerce-f41f8.firebaseapp.com",
    projectId: "e-commerce-f41f8",
    storageBucket: "e-commerce-f41f8.firebasestorage.app",
    messagingSenderId: "536471577931",
    appId: "1:536471577931:web:8553ec0efd157609c2b4ce",
    measurementId: "G-4H27XVVDJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


export const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
};


export const googleSignOut = () => {
    return signOut(auth);
};