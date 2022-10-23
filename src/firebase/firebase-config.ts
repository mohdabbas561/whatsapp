// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGuJemuhaeD7fQk_n6fo2oKrbHLquH2DQ",
  authDomain: "whatsappweb-ac6e4.firebaseapp.com",
  projectId: "whatsappweb-ac6e4",
  storageBucket: "whatsappweb-ac6e4.appspot.com",
  messagingSenderId: "48706225957",
  appId: "1:48706225957:web:eaf19a82f533a26dc33ccc",
  measurementId: "G-PP5X0W0T1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
