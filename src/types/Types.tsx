import { MouseEventHandler } from "react";

export interface SlideBarProps{
    clicked: MouseEventHandler<HTMLDivElement> | undefined;
    icon?: JSX.Element;
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

export interface sendTweetProps{
    displayName: string;
    username: string;
    verified: boolean;
    text: string;
    image: string;
    avatar: string;
}