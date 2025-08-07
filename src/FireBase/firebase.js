// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCiKLvLTnwCRmg-8rSH4RNRRxmeN3tLiQ",
  authDomain: "hanger-clone.firebaseapp.com",
  projectId: "hanger-clone",
  storageBucket: "hanger-clone.firebasestorage.app",
  messagingSenderId: "155191349765",
  appId: "1:155191349765:web:d52d38c2a669f44292826c",
  measurementId: "G-9LK86B91KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app)
const analytics = getAnalytics(app);
export default app