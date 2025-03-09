// src/Pages/Notifications/NotificationItem.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet, faAt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { INotification } from '../../types/Notifications';

interface NotificationItemProps {
  notification: INotification;
}

function NotificationItem({ notification }: NotificationItemProps) {
  // Get the appropriate icon based on notification type
  const getIcon = () => {
    switch (notification.type) {
      case 'like':
        return <FontAwesomeIcon icon={faHeart} className="notification__icon notification__icon--like" />;
      case 'retweet':
        return <FontAwesomeIcon icon={faRetweet} className="notification__icon notification__icon--retweet" />;
      case 'mention':
        return <FontAwesomeIcon icon={faAt} className="notification__icon notification__icon--mention" />;
      case 'follow':
        return <FontAwesomeIcon icon={faUserPlus} className="notification__icon notification__icon--follow" />;
      default:
        return null;
    }
  };

  return (
    <div className={`notification ${notification.isRead ? 'notification--read' : ''}`}>
      <div className="notification__icon-container">
        {getIcon()}
      </div>
      <div className="notification__avatar">
        <img src={notification.avatar} alt={notification.displayName} />
      </div>
      <div className="notification__content">
        <div className="notification__header">
          <span className="notification__displayName">{notification.displayName}</span>
          <span className="notification__username">@{notification.username}</span>
          <span className="notification__time">{notification.time}</span>
        </div>
        <div className="notification__text">
          {notification.content}
        </div>
      </div>
    </div>
  );
}

export default NotificationItem;