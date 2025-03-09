// src/Pages/Notifications/Notifications.tsx
import React, { useEffect, useState } from 'react';
import '../../Styles/Notifications.css';
import NotificationItem from './NotificationItem';
import { INotification } from '../../types/Notifications';
import { getUserNotifications, markAllNotificationsAsRead } from '../../services/notificationService';
import CircularProgress from '@material-ui/core/CircularProgress';

function Notifications() {
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        const fetchedNotifications = await getUserNotifications();
        setNotifications(fetchedNotifications);
        setError(null);
        
        // Mark all as read when the component loads
        await markAllNotificationsAsRead();
      } catch (err) {
        console.error('Error fetching notifications:', err);
        setError('Failed to load notifications. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const filteredNotifications = activeTab === 'mentions'
    ? notifications.filter(notification => notification.type === 'mention')
    : notifications;

  return (
    <div className="notifications">
      <div className="notifications__header">
        <h2>Notifications</h2>
      </div>
      <div className="notifications__tabs">
        <div 
          className={`notifications__tab ${activeTab === 'all' ? 'notifications__tab--active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </div>
        <div 
          className={`notifications__tab ${activeTab === 'mentions' ? 'notifications__tab--active' : ''}`}
          onClick={() => setActiveTab('mentions')}
        >
          Mentions
        </div>
      </div>
      
      <div className="notifications__list">
        {loading ? (
          <div className="notifications__loading">
            <CircularProgress color="primary" />
          </div>
        ) : error ? (
          <div className="notifications__error">{error}</div>
        ) : filteredNotifications.length === 0 ? (
          <div className="notifications__empty">
            <p>No notifications yet</p>
          </div>
        ) : (
          filteredNotifications.map(notification => (
            <NotificationItem key={notification.id} notification={notification} />
          ))
        )}
      </div>
    </div>
  );
}

export default Notifications;