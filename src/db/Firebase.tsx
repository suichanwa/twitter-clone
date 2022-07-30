import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB20FN4WolW_Cvgh_ej58MPUTDQar-8X2Q",
  authDomain: "twitter-clone-a6304.firebaseapp.com",
  projectId: "twitter-clone-a6304",
  storageBucket: "twitter-clone-a6304.appspot.com",
  messagingSenderId: "721753979011",
  appId: "1:721753979011:web:c6b5ef9c671de5999943b6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);