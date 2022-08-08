import { MouseEventHandler, ReactNode } from "react";
export interface ButtonProps {
    children?: string | ReactNode;
    title?: string;
    variant?: "filled" | "outlined" | "text";
    size?: "small" | "medium" | "large";
    shape?: "round" | "square" | "circle";
    color?: "primary" | "secondary" | "danger" | "success" | "warning";
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
