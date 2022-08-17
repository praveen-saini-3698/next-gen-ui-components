import { CSSProperties, FormEvent, ReactNode } from "react";
import { GenericComponentProps } from "../GenericComponent/types";
export type FieldType = "text" | "number" | "select" | "checkbox" | "radio" | "email" | "date" | "detetime";

// export interface FormSchema extends InputProps, CheckboxInputProps, RadioInputProps, EmailInputProps, InputDatTimeProps, InputDateProps, InputNumberProps, SelectOptionProps {
export interface FormSchema {
    id?: string;
    type: FieldType;
    name: string;
    label?: string | ReactNode;
    defaultValue?: string | number | boolean | Date;
    value?: string | number | boolean | Date;
    validation?: void;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    style?: CSSProperties;
    className?: string;
};

export interface FormBuilderProps {
    schema: Array<GenericComponentProps<HTMLInputElement>>;
    title?: string | ReactNode;
    initialValue?: Record<string, any>;
    variant?: "mui" | "bootstrap" | "simple" | "custom";
    onSubmit?: (event: FormEvent<HTMLFormElement>, form: Record<string, string | number | boolean | Date | null>) => void;
    onInput?: (name: string, value: string) => void;
    onSelect?: (name: string, value: string) => void;
    onDateSelect?: (name: string, value: Date) => void;
    onCheckBoxSelect?: (name: string, value: boolean) => void;
    onRadioClick?: (name: string, value: boolean) => void;
};