import React from 'react';
import { Avatar } from '@material-ui/core';
import '../../Styles/ProfileHeader.css';

interface ProfileHeaderProps {
    displayName: string;
    username: string;
    avatar: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ displayName, username, avatar }) => {
    return (
        <div className="profile-header">
            <Avatar src={avatar} className="profile-avatar" />
            <div className="profile-info">
                <h2>{displayName}</h2>
                <p>@{username}</p>
            </div>
        </div>
    );
};

export default ProfileHeader;