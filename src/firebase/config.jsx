// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPozutY6crayYqGvxT_xslAEqxU67hfXI",
  authDomain: "palteados.firebaseapp.com",
  projectId: "palteados",
  storageBucket: "palteados.appspot.com",
  messagingSenderId: "243525256703",
  appId: "1:243525256703:web:22d1b4c2177f1d8112d3ca",
  measurementId: "G-Z60ZK41DQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
 
