// src/services/notificationService.ts
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
  limit,
  writeBatch
} from 'firebase/firestore';
import { db, auth } from '../firebase';
import { INotification } from '../types/Notifications';

// Collection reference
const notificationsCollectionRef = collection(db, 'notifications');

// Create a notification
export const createNotification = async (
  receiverId: string,
  type: 'like' | 'retweet' | 'mention' | 'follow',
  content: string,
  relatedItemId?: string // Tweet ID or other related content
) => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('No user is logged in');

    // Don't notify yourself
    if (currentUser.uid === receiverId) return;
    
    await addDoc(notificationsCollectionRef, {
      receiverId,
      senderId: currentUser.uid,
      senderUsername: currentUser.displayName,
      senderAvatar: currentUser.photoURL || '',
      type,
      content,
      relatedItemId,
      isRead: false,
      createdAt: serverTimestamp()
    });
    
    return true;
  } catch (error) {
    console.error('Error creating notification: ', error);
    throw error;
  }
};

// Get user notifications
export const getUserNotifications = async () => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('No user is logged in');
    
    const q = query(
      notificationsCollectionRef,
      where('receiverId', '==', currentUser.uid),
      orderBy('createdAt', 'desc'),
      limit(50)
    );
    
    const querySnapshot = await getDocs(q);
    
    const notifications = querySnapshot.docs.map(doc => {
      const data = doc.data();
      // Make sure type is one of the allowed values in our union type
      const notificationType = data.type as 'like' | 'retweet' | 'mention' | 'follow';
      
      return {
        id: doc.id,
        type: notificationType,
        username: data.senderUsername,
        displayName: data.senderUsername, // Using username as displayName for now
        avatar: data.senderAvatar,
        content: data.content,
        time: data.createdAt ? new Date(data.createdAt.toDate()).toLocaleString() : 'Just now',
        isRead: data.isRead
      };
    });
    
    return notifications;
  } catch (error) {
    console.error('Error getting notifications: ', error);
    throw error;
  }
};

// Mark notifications as read
export const markNotificationsAsRead = async (notificationIds: string[]) => {
  try {
    const batch = writeBatch(db);
    
    notificationIds.forEach(id => {
      const notificationRef = doc(db, 'notifications', id);
      batch.update(notificationRef, { isRead: true });
    });
    
    await batch.commit();
    return true;
  } catch (error) {
    console.error('Error marking notifications as read: ', error);
    throw error;
  }
};

// Mark all notifications as read
export const markAllNotificationsAsRead = async () => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('No user is logged in');
    
    const q = query(
      notificationsCollectionRef,
      where('receiverId', '==', currentUser.uid),
      where('isRead', '==', false)
    );
    
    const querySnapshot = await getDocs(q);
    
    const batch = writeBatch(db);
    querySnapshot.docs.forEach(document => {
      batch.update(document.ref, { isRead: true });
    });
    
    await batch.commit();
    return true;
  } catch (error) {
    console.error('Error marking all notifications as read: ', error);
    throw error;
  }
};

// Get unread notification count
export const getUnreadNotificationCount = async () => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) return 0;
    
    const q = query(
      notificationsCollectionRef,
      where('receiverId', '==', currentUser.uid),
      where('isRead', '==', false)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
  } catch (error) {
    console.error('Error getting unread notification count: ', error);
    return 0;
  }
};