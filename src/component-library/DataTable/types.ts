import React from "react";

export type HeaderValueTypes = "string" | "number" | "boolean" | "amount" | "date" | "datetime" | "avatar" | "trash" | "view" | "edit";

export type SortTypes = null | undefined | "asc" | "desc";

export interface DataTableColumnOptions {
    accessor: string;
    label: string | React.ReactNode;
    type?: HeaderValueTypes;
};

export interface DataTableDataOptions {
    [key: string]: string | React.ReactNode;
};

export interface PaginationOptions {
    rowPerPage: number;
    page: number;
    range: {
        start: number;
        end: number;
    }
};

export interface DataTableProps {
    columns: DataTableColumnOptions[];
    data: DataTableDataOptions[];
    style?: React.CSSProperties;
    className?: string;
    onRowClick?: CallableFunction;
    onCellClick?: CallableFunction;
    sortable?: boolean;
    title?: string | React.ReactNode;
    pagination?: PaginationOptions;
    checkbox?: boolean;
    onSelectedRows?: CallableFunction;
    rowPerPage?: number;
    showAll?: boolean;
    bordered?: boolean;
    showEdit?: boolean;
    showDelete?: boolean;
    onEdit?: (event: React.MouseEvent<SVGElement, MouseEvent>, row: DataTableDataOptions) => void;
    onDelete?: (event: React.MouseEvent<SVGElement, MouseEvent>, row: DataTableDataOptions) => void;
    onSelect?: CallableFunction;
};