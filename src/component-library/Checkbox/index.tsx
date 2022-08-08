import React from "react";
import { CheckboxProps } from "./types";

export default (props: CheckboxProps) => {
    return (
        <input type="checkbox"
            style={props.style}
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}
            title={props.title}
        >
            {props.children}
        </input>
    );
};