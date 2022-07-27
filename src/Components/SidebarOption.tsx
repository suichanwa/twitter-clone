import React from "react";
import "./SidebarOption.css";

interface SidebarOptionProps {
    active: boolean;
    text: string;
    Icon?: React.ElementType;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({ active, text, Icon }) => {
    return (
        <div className={`sidebarOption ${active ? "sidebarOption--active" : ""}`}>
            {Icon && <Icon className="sidebarOption__icon" />}
            <div className="sidebarOption__text">{text}</div>
        </div>
    );
}

export default SidebarOption;