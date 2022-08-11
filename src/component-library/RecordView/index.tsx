import React from "react";
import styles from './index.module.scss';
import { RecordViewProps } from "./types";
import { convertValue } from "./utility";

export default (props: RecordViewProps) => {

    return (
        <div className={styles['record-view']}>
            <div className={styles['record-header']}>{props.title}</div>
            <div className={styles['record-content']}>
                {Object.entries(props.record).map(([_key, value]) => props.view === "simple" ?
                    <div className={styles['item']}>
                        <div className={styles['label']}>{value.label}</div>
                        <div className={styles['value']}>{convertValue(value.type, value.value)}</div>
                    </div>
                    :
                    <div className={styles['record-item']}>
                        <div className={styles['label']}>
                            <label>{value.label}</label>
                        </div>
                        <div className={styles['value']}>{convertValue(value.type, value.value)}</div>
                    </div>
                )}
            </div>
        </div>
    );
};