import { MouseEventHandler, ReactNode } from "react";
export interface CheckboxProps {
    children?: string | ReactNode;
    title?: string;
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary" | "danger" | "success" | "warning";
    onClick?: MouseEventHandler<HTMLInputElement> | undefined;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    checked?: boolean;
}
