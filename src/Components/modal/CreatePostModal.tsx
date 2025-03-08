import React, { useState, useEffect } from 'react';
import { Modal, TextField, Button } from '@material-ui/core';
import { CreatePostModalProps } from '../../types/CreatePostModalProps';
import { IPost } from '../../types/Types';

const CreatePostModal: React.FC<CreatePostModalProps> = ({ open, onClose, onSubmit, initialContent = '' }) => {
  const [content, setContent] = useState('');
  
  // Update content when initialContent changes or modal opens
  useEffect(() => {
    if (open && initialContent) {
      setContent(initialContent);
    }
  }, [open, initialContent]);

  const handleSubmit = () => {
    if (content.trim()) {
      const post: IPost = {
        id: Date.now().toString(),
        content,
        user: {
          id: '1',
          name: 'Current User',
          username: 'user',
          profileImageUrl: ''
        },
        createdAt: new Date().toISOString(),
        likesCount: 0,
        retweetsCount: 0,
        commentsCount: 0
      };
      onSubmit(post);
      setContent('');
    }
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        maxWidth: '500px',
        margin: '100px auto',
        borderRadius: '8px'
      }}>
        <h2>Create Post</h2>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="What's happening?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          margin="normal"
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <Button onClick={onClose} style={{ marginRight: '10px' }}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            disabled={!content.trim()}
          >
            Post
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePostModal; 