// src/services/tweetService.ts
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc, 
  query, 
  where, 
  orderBy, 
  serverTimestamp, 
  DocumentData 
} from 'firebase/firestore';
import { db } from '../firebase';
import { IPost } from '../types/Types';

// Collection reference
const tweetsCollectionRef = collection(db, 'tweets');

// Add a new tweet
export const createTweet = async (tweetData: Omit<IPost, 'id'>) => {
  try {
    const docRef = await addDoc(tweetsCollectionRef, {
      ...tweetData,
      createdAt: serverTimestamp(),
      likes: 0,
      retweets: 0,
      comments: 0
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding tweet: ', error);
    throw error;
  }
};

// Get all tweets
export const getAllTweets = async () => {
  try {
    const q = query(tweetsCollectionRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as (IPost & { id: string })[];
  } catch (error) {
    console.error('Error getting tweets: ', error);
    throw error;
  }
};

// Get a single tweet by ID
export const getTweetById = async (id: string) => {
  try {
    const tweetDoc = doc(db, 'tweets', id);
    const docSnap = await getDoc(tweetDoc);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as IPost & { id: string };
    } else {
      throw new Error('Tweet not found');
    }
  } catch (error) {
    console.error('Error getting tweet: ', error);
    throw error;
  }
};

// Get tweets by user
export const getTweetsByUser = async (username: string) => {
  try {
    const q = query(
      tweetsCollectionRef, 
      where('username', '==', username),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as (IPost & { id: string })[];
  } catch (error) {
    console.error('Error getting user tweets: ', error);
    throw error;
  }
};

// Update a tweet
export const updateTweet = async (id: string, data: Partial<IPost>) => {
  try {
    const tweetDoc = doc(db, 'tweets', id);
    await updateDoc(tweetDoc, { ...data });
    return true;
  } catch (error) {
    console.error('Error updating tweet: ', error);
    throw error;
  }
};

// Delete a tweet
export const deleteTweet = async (id: string) => {
  try {
    const tweetDoc = doc(db, 'tweets', id);
    await deleteDoc(tweetDoc);
    return true;
  } catch (error) {
    console.error('Error deleting tweet: ', error);
    throw error;
  }
};

// Like a tweet
export const likeTweet = async (id: string) => {
  try {
    const tweetDoc = doc(db, 'tweets', id);
    const tweetSnap = await getDoc(tweetDoc);
    
    if (tweetSnap.exists()) {
      const currentLikes = tweetSnap.data().likes || 0;
      await updateDoc(tweetDoc, { likes: currentLikes + 1 });
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error liking tweet: ', error);
    throw error;
  }
};

// Retweet a tweet
export const retweetTweet = async (id: string) => {
  try {
    const tweetDoc = doc(db, 'tweets', id);
    const tweetSnap = await getDoc(tweetDoc);
    
    if (tweetSnap.exists()) {
      const currentRetweets = tweetSnap.data().retweets || 0;
      await updateDoc(tweetDoc, { retweets: currentRetweets + 1 });
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error retweeting: ', error);
    throw error;
  }
};