import React from "react";
import styles from './index.module.scss';
import { CheckboxProps } from "./types";

export default (props: CheckboxProps) => {
    return (
        <div className={`${styles['form-check']} ${props.className ?? ''}`}>
            <input type="checkbox"
                style={props.style}
                className={styles['form-check-input']}
                onClick={props.onClick}
                disabled={props.disabled}
                title={props.title}
                checked={props.checked}
            />
            <label className={styles["form-check-label"]}>
                {props.children}
            </label>
        </div>
    );
};
