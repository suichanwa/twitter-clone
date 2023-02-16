import {forwardRef, useState} from "react";
import "../Styles/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import PublishIcon from "@material-ui/icons/Publish";
import { IPost } from "../types/Types";
import LikeButton from "./LikeButton";
import RTButton from "./Buttons/RTButton";
import CommentButton from "./Buttons/CommentButton";
import CommentForm from "./Comment/CommentForm";

const Post = forwardRef((props: IPost, ref: any) => {
    const {displayName, username, verified, text, image, avatar} = props;
    const [posts, setPosts] = useState<IPost[]>([]);
    const [open, setIsOpen] = useState(false);
    const openForm = () => setIsOpen(true);
    const closeForm = () => setIsOpen(false); 


    const addPost = (post: IPost) => {
        setPosts([...posts, post]);
    }

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
                  <CommentButton
                        onComment={() => {
                            const newPost = { ...props, text: "This is a new post" };
                            addPost(newPost);
                            setIsOpen(true);
                            openForm();
                        }}
                    />
                    <RTButton post={props} onRetweet={() => {
                        console.log("retweet");
                    }} />
                    <LikeButton />
                    <PublishIcon fontSize="small" />
                </div>
                <CommentForm open={open} close={closeForm} />
            </div>
        </div>
    );
});

export default Post;