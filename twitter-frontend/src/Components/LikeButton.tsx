import React, {useState} from 'react';
import '../Styles/LikeButton.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Button } from '@material-ui/core';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    const [counter, setCounter] = useState(0);


    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setLiked(!liked);
        if(liked){
            setCounter(counter + 1);
        }
    };

    return(
        <Button onClick={handleClick} className="like-button-wrapper">
            <FavoriteBorderIcon className={liked ? "like-button-wrapper" : "liked"} fontSize="small" />
            {counter ? counter : liked  ? 1 : ""}
        </Button>
    );
}

export default LikeButton;