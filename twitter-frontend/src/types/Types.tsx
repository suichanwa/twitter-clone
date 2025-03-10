import React, { MouseEventHandler } from "react";

export interface SlideBarProps {
    clicked: MouseEventHandler<HTMLDivElement> | undefined;
    icon?: Element;
    title?: string;
    active?: boolean;
    
}

export interface IPost {
    displayName: string;
    username: string;
    verified: boolean;
    text: string;
    image: string;
    avatar: string;
}

export interface sendTweetProps {
    displayName: string;
    username: string;
    verified: boolean;
    text: string;
    image: string;
    avatar: string;
}

export interface RTButtonProps {
    onRetweet: () => void;
    post: IPost;
}

export interface CommentFormProps {
    open: boolean;
    close: () => void;
}