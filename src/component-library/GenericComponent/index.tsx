import React from 'react';
import styles from './index.module.scss';
import type { GenericComponentProps } from './types';

export default (props: GenericComponentProps<HTMLInputElement>) => {
    return (
        <div className={`${styles['form-field']} ${styles['form-field-' + props.type]} ${styles['inputField']}`}>
            {props.label && props.position !== "after" && <span className={`${styles["form-label"]}`}>{props.label}</span>}
            <input
                className={`${styles["form-input"]} ${styles["type-" + props.type]}`}
                autoFocus={props.autoFocus}
                checked={props.checked}
                disabled={props.disabled}
                height={props.height}
                list={props.list}
                max={props.max}
                maxLength={props.maxLength}
                min={props.min}
                minLength={props.minLength}
                multiple={props.multiple}
                name={props.name}
                pattern={props.pattern}
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                required={props.required}
                size={props.size}
                src={props.src}
                step={props.step}
                value={props.value}
                width={props.width}
                style={props.style}
                type={props.type}
                onChange={props.onChange}
                title={props.title}
            />
            {props.label && props.position === "after" && <span className={`${styles["form-label"]}`}>{props.label}</span>}
        </div>
    );
}