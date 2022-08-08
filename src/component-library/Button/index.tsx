import React from "react";
import { ButtonProps } from "./types";

export default (props: ButtonProps) => {
    return (
        <button
            style={props.style}
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}
            title={props.title}
        >
            {props.children}
        </button>
    );
};