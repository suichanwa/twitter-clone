import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import { AvatarIcon } from './AvatarIcon';
import '../Styles/PostFormCard.css';

const PostFormCard = () => {
  const [postMessage, setPostMessage] = useState('');

  const handlePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPostMessage('');
  };

  return (
    <div className="postFormCard">
      <form onSubmit={handlePost}>
        <div className="postFormCard__input">
          <Avatar src={AvatarIcon} />
          <input
            type="text"
            placeholder="What's going on homie?"
            value={postMessage}
            onChange={(e) => setPostMessage(e.target.value)}
            className="postFormCard__inputField"
          />
        </div>
        <Button type="submit" className="postFormCard__button">
          Post
        </Button>
      </form>
    </div>
  );
};

export default PostFormCard;