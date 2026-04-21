
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
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyC8mmTBo8FI1ZbzmF59_HGpDilgSgimwlg",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "e-commerce-f41f8.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "e-commerce-f41f8",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "e-commerce-f41f8.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "536471577931",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:536471577931:web:8553ec0efd157609c2b4ce",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-4H27XVVDJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics = null;

if (typeof window !== 'undefined') {
    try {
        analytics = getAnalytics(app);
    } catch (error) {
        console.warn('Firebase analytics is not available in this environment.', error);
    }
}

export { analytics };


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


export const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
};


export const googleSignOut = () => {
    return signOut(auth);
};