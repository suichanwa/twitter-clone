import React, {useState} from 'react';
import '../Styles/LikeButton.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Button } from '@material-ui/core';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
   
    const handelClick = () => {
        setLiked(!liked);
    }

    return(
        <Button onClick={() => setLiked(!liked)} className="like-button-wrapper">
            <FavoriteBorderIcon onClick={handelClick} className={liked ? "like-button-wrapper" : "liked"} fontSize="small" />
        </Button>
    );
}

export default LikeButton;