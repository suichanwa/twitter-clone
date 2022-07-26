import { MouseEventHandler } from "react";

export interface SlideBarProps{
    clicked: MouseEventHandler<HTMLDivElement> | undefined;
    icon?: JSX.Element;
    title?: string;
    active?: boolean;
}