import React from "react";
export interface WelcomePageProps {
    style?: React.CSSProperties;
    className?: string;
    title: string;
    children?: string | React.ReactNode;
}
