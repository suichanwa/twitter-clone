import React from "react";
import '../Styles/SidebarOption.css';

function SidebarOption(props: { active: boolean; text: string; Icon?: React.ElementType }) {
    return (
        <div className={`sidebarOption ${props.active ? "active" : ""}`}>
            {props.Icon && <props.Icon className="sidebarOption__icon" />}
            <span className="sidebarOption__text">{props.text}</span>
        </div>
    );
}

export default SidebarOption;