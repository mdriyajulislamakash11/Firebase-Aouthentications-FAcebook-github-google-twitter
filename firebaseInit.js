// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSNahlst0DGH9V_Squ0zye_sv-0AI_fH4",
  authDomain: "aothentication-a9c99.firebaseapp.com",
  projectId: "aothentication-a9c99",
  storageBucket: "aothentication-a9c99.firebasestorage.app",
  messagingSenderId: "474592100433",
  appId: "1:474592100433:web:caf27851727d38c4d47870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;