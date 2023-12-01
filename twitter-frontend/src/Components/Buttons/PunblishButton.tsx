import React, { useState } from "react";
import { Button } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import "../../Styles/PublishButton.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PublishButton = () => {
    const [published, setPublished] = useState(false);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setPublished(!published);
        toast.success("Published successfully!");
    };

    return (
        <>
            <Button onClick={handleClick} className="publish-button-wrapper">
                <PublishIcon
                    className={published ? "publish-button-wrapper" : "published"}
                    fontSize="small"
                />
            </Button>
            <ToastContainer />
        </>
    );
};

export default PublishButton;