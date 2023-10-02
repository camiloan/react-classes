// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

// Your web app's Firebase configuration
// Dev/Prod
/* const firebaseConfig = {
  apiKey: "AIzaSyCSL5fuAABy9YF_2_QKtDCEppIMdMpy81w",
  authDomain: "react-cursos-8769c.firebaseapp.com",
  projectId: "react-cursos-8769c",
  storageBucket: "react-cursos-8769c.appspot.com",
  messagingSenderId: "653790554851",
  appId: "1:653790554851:web:b1c3c8018c713cc471f3d6"
}; */

// Testing
const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
