import styles from './index.module.scss';
import React from 'react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { DataTableProps, PaginationOptions, SortTypes } from './types';
import { default as Button } from './../Button';
import { default as Checkbox } from './../Checkbox';

export const DataTable = (props: DataTableProps) => {
    const tableData = props.data;
    const [columns] = React.useState(props.columns);
    const [selectedRows, setSelectedRows] = React.useState<Array<{ [key: string]: any }>>([]);
    const [sortDirection, setSortDirection] = React.useState<{ [key: string]: SortTypes }>({});
    const [rowPerPage] = React.useState<number>(props.rowPerPage ?? 10);
    const [searchableText, setSearchableText] = React.useState<string>();
    const [pagination, setPagination] = React.useState<PaginationOptions>(props.pagination ?? {
        page: 0,
        rowPerPage: rowPerPage,
        range: {
            start: 1,
            end: rowPerPage
        }
    });
    const [data, setData] = React.useState(tableData.slice(pagination.range.start - 1, pagination.range.end));
    const [maxPages] = React.useState<number>(Math.ceil(tableData.length / pagination.rowPerPage));

    React.useEffect(() => {
        if (props.sortable) {
            columns.forEach(column => sortDirection[column.accessor] = null);
            setSortDirection({ ...sortDirection });
        }
    }, []);

    const updateSortDirection = (key: string): void => {
        sortDirection[key] = sortDirection[key] === "asc" ? "desc" : "asc";
        setSortDirection({ ...sortDirection });
        onSorting(key, sortDirection[key]);
    };

    const onPaginationChanged = (type: "first" | "last" | "next" | "prev"): void => {
        switch (type) {
            case "first":
                pagination.page = 0;
                pagination.range.start = 0;
                pagination.range.end = pagination.rowPerPage;
                setPagination({ ...pagination });
                break;
            case "last":
                pagination.page = maxPages - 1;
                pagination.range.start = pagination.page * pagination.rowPerPage;
                pagination.range.end = (pagination.page * pagination.rowPerPage) + pagination.rowPerPage;
                setPagination({ ...pagination });
                break;
            case "next":
                pagination.page += 1;
                pagination.range.start = pagination.page * pagination.rowPerPage;
                pagination.range.end = (pagination.page * pagination.rowPerPage) + pagination.rowPerPage;
                setPagination({ ...pagination });
                break;
            case "prev":
                pagination.page -= 1;
                pagination.range.start = pagination.page * pagination.rowPerPage;
                pagination.range.end = (pagination.page * pagination.rowPerPage) + pagination.rowPerPage;
                setPagination({ ...pagination });
                break;
            default: break;
        }
        setData([...tableData.slice(pagination.range.start, pagination.range.end)]);
    };

    const onSearch = (value: string) => {
        setSearchableText(value);
        const filter = tableData.filter(row => JSON.stringify(row).toLowerCase().match(value.toLowerCase())).slice(0, pagination.rowPerPage);
        setData([...filter]);
    };

    const onSorting = (type: string, direction: SortTypes) => {
        const sorted = data.sort((prev, next) => {
            const x = prev[type] as any;
            const y = next[type] as any;
            return ((x < y) ? (direction === "asc" ? -1 : 1) : ((x > y) ? (direction === "asc" ? 1 : -1) : 0));
        });
        setData([...sorted]);
    }

    return (
        <div className={styles['ui-data-table-tek']}>
            <div className={styles["show-global-search"]}>
                <div className={styles["table-title"]}>
                    {props?.title}
                </div>
                <div>
                    <input
                        type="text"
                        value={searchableText}
                        onChange={event => onSearch(event.target.value)}
                    />
                </div>
            </div>
            {selectedRows.length ? <div className={styles["table-selected-rows"]}>
                <div>
                    <p>
                        {selectedRows.length} Rows selected
                        <span className={styles["do-with-selected"]} onClick={() => props?.onSelectedRows ? props.onSelectedRows(selectedRows) : null}>
                            Do Something ?
                        </span>
                    </p>
                </div>
            </div> : undefined}
            <table className={`${props.className ? props.className.concat(' ') : ''}${styles['data-table']}`}>
                <thead>
                    <tr>
                        {props.checkbox && <th>
                            <Checkbox
                                checked={selectedRows.length > 0 ? true : false}
                                onClick={(event: any) => {
                                    if (event.target.checked) {
                                        setSelectedRows([...data]);
                                    } else {
                                        setSelectedRows([]);
                                    }
                                }}
                            />
                        </th>}
                        {columns.map(column => <th key={column.accessor}>
                            <div className={props.sortable ? styles['show-pointer'] : ''} onClick={() => updateSortDirection(column.accessor)}>
                                {column.label}
                                {props.sortable && <span className={styles["sortable-column"]}>
                                    {sortDirection[column.accessor] === "asc" && <FaSortDown />}
                                    {sortDirection[column.accessor] === "desc" && <FaSortUp />}
                                    {sortDirection[column.accessor] === null && <FaSort />}
                                </span>}
                            </div>
                        </th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => <tr key={index}>
                        {props.checkbox && <td>
                            <Checkbox
                                checked={selectedRows.find(selected => row.id === selected.id) ? true : false}
                                onClick={(event: any) => {
                                    if (event.target.checked) selectedRows.push(row);
                                    else selectedRows.map((selected, index) => {
                                        if (selected.id === row.id) selectedRows.splice(index, 1);
                                    })
                                    setSelectedRows([...selectedRows]);
                                }}
                                size='small'
                                color="primary"
                            />
                        </td>}
                        {columns.map(column => <td key={column.accessor + index}>
                            {row[column.accessor]}
                        </td>)}
                    </tr>)}
                </tbody>
            </table>
            <div>
                <div className={styles["table-footer"]}>
                    <div className={styles["table-footer-left"]}>
                        <div className={styles["table-footer-left-2"]}>
                            Showing {pagination.range.start} to {pagination.range.end} of {tableData.length} entries
                        </div>
                        {props.showAll && <div>
                            <span className={styles["show-all-data"]}>
                                <Checkbox onClick={(event: any) => {
                                    if (event.target.checked) {
                                        setData([...tableData]);
                                        pagination.range.end = tableData.length;
                                        setPagination({ ...pagination });
                                    } else {
                                        pagination.range.end = rowPerPage;
                                        setPagination({ ...pagination });
                                        setData(tableData.slice(pagination.range.start - 1, pagination.range.end));
                                    }
                                }} /> Show All
                            </span>
                        </div>}
                    </div>
                    <div className={styles["table-footer-right"]}>
                        <Button onClick={() => onPaginationChanged("first")} variant='outlined' size="small" color="primary" disabled={pagination.page === 0}>First</Button>
                        <Button onClick={() => onPaginationChanged("prev")} variant='outlined' size="small" color="primary" disabled={pagination.page === 0}>Previous</Button>
                        <Button variant='outlined' size="small" color="primary" disabled>{pagination.page + 1}</Button>
                        <Button onClick={() => onPaginationChanged("next")} variant='outlined' size="small" color="primary" disabled={pagination.page >= maxPages - 1}>Next</Button>
                        <Button onClick={() => onPaginationChanged("last")} variant='outlined' size="small" color="primary" disabled={pagination.page >= maxPages - 1}>Last</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}