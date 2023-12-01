import { Avatar, Button } from "@material-ui/core";
import "../../Styles/TweetBox.css";
import { AvatarIcon } from "../AvatarIcon";
import React, { useState } from "react";
import { sendTweetProps } from "../../types/Types";

type CommentFormProps = {
  close: () => void;
  open: boolean;
}

function CommentForm(props: CommentFormProps) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [isOpen, setIsOpen] = useState(props.open);

  const sendTweet = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTweet: sendTweetProps = {
      displayName: "suichanwa",
      username: "name",
      verified: false,
      text: tweetMessage,
      image: tweetImage,
      avatar: AvatarIcon,
    };

    /*
    userCollectionRef.add(newTweet);
    setTweetMessage("");
    setTweetImage("");
    */

    setIsOpen(false);
  };

  return (
    <div className={`tweetBox ${isOpen ? "open" : ""}`}>
      <form onSubmit={sendTweet}>
        <div className="tweetBox__input">
          <Avatar src={AvatarIcon} />
          <input
            placeholder="What's happening?"
            type="text"
            className="inputts"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <Button type="submit" className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default CommentForm;