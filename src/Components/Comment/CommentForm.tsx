import React, { useState } from "react";
import "../../Styles/Post.css";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";

const CommentForm = () => {
    const [comment, setComment] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log("Comment submitted: ", comment);
        setComment("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
                <InputLabel htmlFor="comment">Add a comment</InputLabel>
                <Input
                    id="comment"
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </FormControl>
            <Button type="submit" fullWidth variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

export default CommentForm;
