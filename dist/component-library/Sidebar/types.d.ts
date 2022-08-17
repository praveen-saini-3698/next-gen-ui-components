import { MouseEvent, ReactNode } from "react";
export interface SidebarContentOptions {
    label?: string;
    key?: string;
    icon?: string | ReactNode;
    suffix?: string | ReactNode;
    prefix?: string | ReactNode;
    submenu?: Array<SidebarContentOptions>;
    onClick?: (event: MouseEvent<HTMLLIElement>, record: SidebarContentOptions) => void;
}
export interface SidebarProps {
    title?: string | ReactNode;
    content?: Array<SidebarContentOptions>;
    children?: string | ReactNode;
    footer?: string | ReactNode;
    collapsed?: boolean;
    toggled?: boolean;
}
