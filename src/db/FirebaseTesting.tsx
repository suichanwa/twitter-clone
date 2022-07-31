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