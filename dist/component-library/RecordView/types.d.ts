import { ReactNode } from "react";
export declare type RecordValueType = "string" | "number" | "amount" | "date" | "datetime" | "boolean" | "avatar";
export interface RecordOptions {
    [key: string]: {
        label: string;
        value: any;
        type: RecordValueType;
    };
}
export interface RecordViewProps {
    title?: string | ReactNode;
    record: RecordOptions;
    view?: "field" | "simple";
}
