import React, { MouseEventHandler } from "react";
import "./SidebarOption.css";

const SidebarOption = (text: any, Icon: any, active: any, props:any) => {
    return (
    <div className={`sidebarOption  ${active && "sidebarOption--active"}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
    );
}

export default SidebarOption;