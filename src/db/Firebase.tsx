import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import 'firebase/compat/database'
import { getDatabase, ref } from 'firebase/database'


interface Firebase {
  initializeApp: typeof initializeApp;
  analytics: typeof getAnalytics;
  auth: typeof getAuth;
}


const firebaseConfig = {
  apiKey: "AIzaSyARhUqAF5HV54Uj1hmHCx_WG-HYAm3d_bc",
  authDomain: "twitter-clone-c19fc.firebaseapp.com",
  projectId: "twitter-clone-c19fc",
  storageBucket: "twitter-clone-c19fc.appspot.com",
  messagingSenderId: "850790872392",
  appId: "1:850790872392:web:ccbec4c841e6b5cf63af7d",
  measurementId: "G-KXTQEEZRBQ"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const analytics = getAnalytics(app);

//const ref = db.ref("posts");
export default db;

