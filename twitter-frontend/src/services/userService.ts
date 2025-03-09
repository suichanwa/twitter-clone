// src/services/userService.ts
import { 
  collection, 
  addDoc, 
  updateDoc, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  serverTimestamp,
  setDoc
} from 'firebase/firestore';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  updateProfile,
  User
} from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth, storage } from '../firebase';

// Collection reference
const usersCollectionRef = collection(db, 'users');

// Interface for user data
export interface IUser {
  uid: string;
  displayName: string;
  username: string;
  email: string;
  avatar: string;
  bio?: string;
  location?: string;
  website?: string;
  followers: number;
  following: number;
  createdAt: any;
}

// Register a new user
export const registerUser = async (
  email: string, 
  password: string, 
  displayName: string, 
  username: string
) => {
  try {
    // Create auth user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update profile
    await updateProfile(user, {
      displayName: displayName
    });
    
    // Store user data in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      displayName,
      username,
      email,
      avatar: '', // Default empty avatar
      bio: '',
      location: '',
      website: '',
      followers: 0,
      following: 0,
      createdAt: serverTimestamp()
    });
    
    return user;
  } catch (error) {
    console.error('Error registering user: ', error);
    throw error;
  }
};

// Login user
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error logging in: ', error);
    throw error;
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error('Error logging out: ', error);
    throw error;
  }
};

// Get current user profile from Firestore
export const getCurrentUserProfile = async () => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('No user is logged in');
    
    const userDoc = doc(db, 'users', currentUser.uid);
    const docSnap = await getDoc(userDoc);
    
    if (docSnap.exists()) {
      return docSnap.data() as IUser;
    } else {
      throw new Error('User profile not found');
    }
  } catch (error) {
    console.error('Error getting user profile: ', error);
    throw error;
  }
};

// Get user by username
export const getUserByUsername = async (username: string) => {
  try {
    const q = query(usersCollectionRef, where('username', '==', username));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { ...doc.data() } as IUser;
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error getting user by username: ', error);
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (data: Partial<IUser>) => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('No user is logged in');
    
    const userDoc = doc(db, 'users', currentUser.uid);
    await updateDoc(userDoc, { ...data });
    
    // Update displayName in Auth if it was changed
    if (data.displayName) {
      await updateProfile(currentUser, {
        displayName: data.displayName
      });
    }
    
    return true;
  } catch (error) {
    console.error('Error updating profile: ', error);
    throw error;
  }
};

// Upload profile image
export const uploadProfileImage = async (file: File) => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('No user is logged in');
    
    // Create a storage reference
    const storageRef = ref(storage, `profile_images/${currentUser.uid}`);
    
    // Upload file
    await uploadBytes(storageRef, file);
    
    // Get download URL
    const downloadURL = await getDownloadURL(storageRef);
    
    // Update user profile with new avatar URL
    await updateUserProfile({ avatar: downloadURL });
    
    // Update Auth profile photoURL
    await updateProfile(currentUser, {
      photoURL: downloadURL
    });
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading profile image: ', error);
    throw error;
  }
};

// Follow a user
export const followUser = async (targetUserId: string) => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('No user is logged in');
    
    // Update the target user's followers count
    const targetUserDoc = doc(db, 'users', targetUserId);
    const targetUserSnap = await getDoc(targetUserDoc);
    
    if (targetUserSnap.exists()) {
      const targetUserData = targetUserSnap.data() as IUser;
      await updateDoc(targetUserDoc, { 
        followers: (targetUserData.followers || 0) + 1 
      });
      
      // Update current user's following count
      const currentUserDoc = doc(db, 'users', currentUser.uid);
      const currentUserSnap = await getDoc(currentUserDoc);
      
      if (currentUserSnap.exists()) {
        const currentUserData = currentUserSnap.data() as IUser;
        await updateDoc(currentUserDoc, { 
          following: (currentUserData.following || 0) + 1 
        });
      }
      
      // Create a follow relationship in a separate collection
      await addDoc(collection(db, 'follows'), {
        follower: currentUser.uid,
        following: targetUserId,
        createdAt: serverTimestamp()
      });
      
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error following user: ', error);
    throw error;
  }
};