import { useState } from "react";
import "../../Styles/CommentButton.css";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import { CommentFormProps } from "../../types/Types";

const CommentForm = ({ open, close }: CommentFormProps) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Comment submitted: ", comment);
    setComment("");
  };

  if (!open) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="test">
      <FormControl fullWidth>
        <InputLabel htmlFor="comment">Add a comment</InputLabel>
        <Input
          id="comment"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </FormControl>
      <Button type="submit" fullWidth variant="contained" color="primary" onClick={close} className="comment-button">
        Submit
      </Button>
    </form>
  );
};

export default CommentForm;