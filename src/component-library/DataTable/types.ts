import React, { MouseEventHandler } from "react";

export type HeaderValueTypes = "string" | "number" | "boolean" | "amount" | "date" | "datetime" | "avatar" | "trash" | "view" | "edit";

export type SortTypes = null | undefined | "asc" | "desc";

export interface DataTableColumnOptions {
    accessor: string;
    label: string | React.ReactNode;
    type?: HeaderValueTypes;
};

export interface DataTableDataOptions {
    [key: string]: string | number | React.ReactNode;
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
    onRowClick?: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: DataTableDataOptions) => void;
    onCellClick?: (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>, cell: any) => void;
    sortable?: boolean;
    title?: string | React.ReactNode;
    pagination?: PaginationOptions;
    checkbox?: boolean;
    onSelectedRows?: (rows: DataTableDataOptions[]) => void;
    onSearch?: (searchText: string) => void;
    rowPerPage?: number;
    showAll?: boolean;
    bordered?: boolean;
    showEdit?: boolean;
    showDelete?: boolean;
    onEdit?: (event: React.MouseEvent<SVGElement, MouseEvent>, row: DataTableDataOptions) => void;
    onDelete?: (event: React.MouseEvent<SVGElement, MouseEvent>, row: DataTableDataOptions) => void;
    onSelect?: CallableFunction;
};