import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARhUqAF5HV54Uj1hmHCx_WG-HYAm3d_bc",
  authDomain: "twitter-clone-c19fc.firebaseapp.com",
  projectId: "twitter-clone-c19fc",
  storageBucket: "twitter-clone-c19fc.appspot.com",
  messagingSenderId: "850790872392",
  appId: "1:850790872392:web:ccbec4c841e6b5cf63af7d",
  measurementId: "G-KXTQEEZRBQ"
};

const db = initializeApp(firebaseConfig);
const analytics = getAnalytics(db);

export default db;
