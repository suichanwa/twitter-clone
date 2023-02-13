import {forwardRef} from "react";
import "../Styles/Post.css";
import { Avatar, Button } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { IPost } from "../types/Types";
import LikeButton from "./LikeButton";
import RTButton from "./Buttons/RTButton";

const Post = forwardRef((props: IPost, ref: any) => {
    const {displayName, username, verified, text, image, avatar} = props;

    //create a function that onClick will toggle the like button


    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="post__headerSpecial">
                                @{username}
                            </span>
                        </h3>
                        {verified && (
                            <VerifiedUserIcon className="post__badge" />
                        )}
                    </div>
                    <div className="post__headerDescription">
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
                <img src={image} alt="tweet" className="post__image" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <LikeButton />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
});

export default Post;
