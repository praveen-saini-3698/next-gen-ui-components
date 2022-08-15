import { CSSProperties, FormEvent, ReactNode } from "react";
import { GenericComponentProps } from "../GenericComponent/types";
export declare type FieldType = "text" | "number" | "select" | "checkbox" | "radio" | "email" | "date" | "detetime";
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
}
export interface FormBuilderProps {
    schema: Array<GenericComponentProps<HTMLInputElement>>;
    variant?: "mui" | "bootstrap" | "simple" | "custom";
    onSubmit?: (event: FormEvent<HTMLFormElement>, form: Record<string, string | number | boolean | Date | null>) => void;
    onInput?: (name: string, value: string) => void;
    onSelect?: (name: string, value: string) => void;
    onDateSelect?: (name: string, value: Date) => void;
    onCheckBoxSelect?: (name: string, value: boolean) => void;
    onRadioClick?: (name: string, value: boolean) => void;
}
