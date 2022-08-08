import React from "react";
import styles from './index.module.scss';
import { CheckboxProps } from "./types";

export default (props: CheckboxProps) => {
    return (
        <div className={`${styles['form-check']} ${props.className ?? ''}`}>
            <input type="checkbox"
                style={props.style}
                className={'form-check-input'}
                onClick={props.onClick}
                disabled={props.disabled}
                title={props.title}
            />
            <label className="form-check-label">
                {props.children}
            </label>
        </div>
    );
};
