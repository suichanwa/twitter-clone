import {useState, useEffect} from "react";
import { db } from "./Firebase";
import {collection, getDocs} from "firebase/firestore";
import TweetBox from "../Components/TweetBox";

interface setUsers {
    age: number;
    name: string;

}

function FirebaseTesting() {
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "users");

    //collect all users from firestore and show it in the console
    const getUsers = async() => {
        const data = await getDocs(userCollectionRef);
        console.log(data);
    }
    useEffect(() => {
        getUsers();
    }
    , []);
}
export default FirebaseTesting;