import React from 'react';
import ProfileHeader from '../Profile/ProfileHeader';
import Post from '../../Components/Post';
import { tweetsDatas } from '../../types/Tweets';
import '../../Styles/Profile.css';

const Profile = () => {
    const user = {
        displayName: 'suichanwa',
        username: 'name',
        avatar: 'https://i.ibb.co/Z8VWY31/2023-03-05-11-29.png',
    };

    return (
        <div className="profile">
            <ProfileHeader
                displayName={user.displayName}
                username={user.username}
                avatar={user.avatar}
            />
            <div className="profile-tweets">
                {tweetsDatas.map((tweet: any, index: number) => (
                    <Post
                        key={index}
                        displayName={tweet.displayName}
                        username={tweet.username}
                        verified={tweet.verified}
                        text={tweet.text}
                        image={tweet.image}
                        avatar={tweet.avatar}
                    />
                ))}
            </div>
        </div>
    );
};

export default Profile;