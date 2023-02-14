import React from "react";
import { Button } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

interface CommentButtonProps {
  onComment: () => void;
}

const CommentButton = (props: CommentButtonProps) => {
  return (
    <Button onClick={props.onComment}>
      <ChatBubbleOutlineIcon fontSize="small" />
    </Button>
  );
};

export default CommentButton;
