import React from "react";
import styles from './index.module.scss';
import { ButtonProps } from "./types";

export default (props: ButtonProps) => {
    const {
        color = 'primary',
        variant = "filled",
        size = "sm"
    } = props;
    return (
        <div className={`${styles['ui-button']} ${props.className ?? ''}`}>
            <button
                style={props.style}
                onClick={props.onClick}
                disabled={props.disabled}
                className={`${styles['btn']} ${styles[`btn-${color}`]} ${styles[`btn-${size}`]} ${styles[`btn-${variant}`]}`}
                title={props.title}
            >
                {props.children}
            </button>
        </div>
    );
};