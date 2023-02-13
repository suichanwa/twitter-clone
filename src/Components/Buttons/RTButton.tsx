import React from 'react';
import { Button } from '@material-ui/core';
import RepeatIcon from '@material-ui/icons/Repeat';

interface RTButtonProps {
  onRetweet: () => void;
}

const RTButton: React.FC<RTButtonProps> = ({ onRetweet }) => {
  return (
    <Button onClick={onRetweet}>
      <RepeatIcon fontSize="small" /> Retweet
    </Button>
  );
};

export default RTButton;
