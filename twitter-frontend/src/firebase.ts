// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf-31qcUTNTDPrpRaji6h3LqAPLbyOhFU",
  authDomain: "twitterclonetest-d61dd.firebaseapp.com",
  projectId: "twitterclonetest-d61dd",
  storageBucket: "twitterclonetest-d61dd.firebasestorage.app",
  messagingSenderId: "868095038277",
  appId: "1:868095038277:web:0daf6944bc6f577f68642c",
  measurementId: "G-4XJ59MPFM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage, analytics };
export default app;