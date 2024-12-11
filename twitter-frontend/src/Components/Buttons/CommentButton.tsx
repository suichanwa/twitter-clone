import { useState } from "react";
import { IconButton } from "@material-ui/core";
import { ChatBubbleOutline } from "@material-ui/icons";

type Props = {
  onComment: () => void;
};

const CommentButton = ({ onComment }: Props) => {
  // Remove the unused open state
  // const [open, setOpen] = useState(false);

  const handleClick = () => {
    // setOpen(true);
    onComment();
  };

  return (
    <IconButton className="commentButton" onClick={handleClick}>
      <ChatBubbleOutline />
    </IconButton>
  );
};

export default CommentButton;