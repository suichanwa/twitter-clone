// src/types/Notifications.ts

export interface INotification {
  id: string | number;  // Support both string (for Firestore) and number (for static data)
  type: 'like' | 'retweet' | 'mention' | 'follow';
  username: string;
  displayName: string;
  avatar: string;
  content: string;
  time: string;
  isRead: boolean;
}