import { ChangeEvent, CSSProperties, ReactNode } from 'react';
export declare type HTMLInputElementTypes = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
export interface SelectRadioOptions {
    label?: string;
    value?: string;
    key?: string;
    checked?: boolean;
    selected?: boolean;
}
export interface GenericComponentProps<T> {
    autoFocus?: boolean | undefined;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    height?: number | string | undefined;
    list?: string | undefined;
    max?: number | string | undefined;
    maxLength?: number | undefined;
    min?: number | string | undefined;
    minLength?: number | undefined;
    multiple?: boolean | undefined;
    name?: string | undefined;
    pattern?: string | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    size?: number | undefined;
    src?: string | undefined;
    step?: number | string | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
    width?: number | string | undefined;
    style?: CSSProperties;
    className?: string | undefined;
    options?: Array<SelectRadioOptions>;
    type: HTMLInputElementTypes;
    label?: string | ReactNode;
    position?: "before" | "after";
    onChange?: (event: ChangeEvent<T>, metaData?: any) => void;
}
