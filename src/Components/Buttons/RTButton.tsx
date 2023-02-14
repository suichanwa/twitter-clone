import {useState} from "react";
import "../../Styles/Post.css";
import RepeatIcon from "@material-ui/icons/Repeat";
import { RTButtonProps } from "../../types/Types";
import { Button } from "@material-ui/core";
import { RTStyle, rteeted } from "../../Styles/Style";

const RTButton = (props: RTButtonProps) => {
    const [retweeted, setRetweeted] = useState(false);

    const {post, onRetweet} = props;

    const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setRetweeted(!retweeted);
        onRetweet();
    }


    return (
        <Button onClick={onClick} className="RTStyle">
            <RepeatIcon fontSize="small" className={retweeted ? "rtButton" : "rteeted"} />
            {retweeted ? "" : ""}
        </Button>
    );
}

export default RTButton;

