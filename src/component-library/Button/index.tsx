import React from "react";
import styles from './index.module.scss';
import { ButtonProps } from "./types";

export default (props: ButtonProps) => {
    return (
        <div className={`${styles['ui-button']} ${props.className ?? ''}`}>
            <button
                style={props.style}
                onClick={props.onClick}
                disabled={props.disabled}
                className={`${styles['btn']} ${styles[`btn-${props.color}`]} ${styles[`btn-${props.size}`]}`}
                title={props.title}
            >
                {props.children}
            </button>
        </div>
    );
};