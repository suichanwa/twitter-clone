import React from "react";
import "./SidebarOption.css";
import { SlideBarProps } from "../types/Types";


const SidebarOption = (props: SlideBarProps) => {
    return (
        <div className="sidebarOption" onClick={props.clicked}>
        {props.icon}
        <div className="sidebarOption__text">{props.title}</div>
        </div>
    );
}

export default SidebarOption;