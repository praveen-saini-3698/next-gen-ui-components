import React from 'react';
import { FaSortDown, FaSortUp, FaSort } from 'react-icons/fa';
import { Checkbox, Button } from '@mui/material';

var styles = {"ui-data-table-tek":"_index-module__ui-data-table-tek__27W74","data-table":"_index-module__data-table__3fMGm","sortable-column":"_index-module__sortable-column__2xDhl","show-pointer":"_index-module__show-pointer__2yfNS","show-global-search":"_index-module__show-global-search__2Sx3R","table-title":"_index-module__table-title__HTXGl","table-footer":"_index-module__table-footer__1V7LX","table-footer-left":"_index-module__table-footer-left__NVrA3","table-footer-left-2":"_index-module__table-footer-left-2__o_eOA","show-all-data":"_index-module__show-all-data__Ve8dK","table-footer-right":"_index-module__table-footer-right__2iwvf","table-selected-rows":"_index-module__table-selected-rows__o5Ukt","do-with-selected":"_index-module__do-with-selected__3BxJo"};

const DataTable = props => {
  const tableData = props.data;
  const [columns] = React.useState(props.columns);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [sortDirection, setSortDirection] = React.useState({});
  const [rowPerPage] = React.useState(props.rowPerPage ?? 10);
  const [searchableText, setSearchableText] = React.useState();
  const [pagination, setPagination] = React.useState(props.pagination ?? {
    page: 0,
    rowPerPage: rowPerPage,
    range: {
      start: 1,
      end: rowPerPage
    }
  });
  const [data, setData] = React.useState(tableData.slice(pagination.range.start - 1, pagination.range.end));
  const [maxPages] = React.useState(Math.ceil(tableData.length / pagination.rowPerPage));
  React.useEffect(() => {
    if (props.sortable) {
      columns.forEach(column => sortDirection[column.accessor] = null);
      setSortDirection({ ...sortDirection
      });
    }
  }, []);

  const updateSortDirection = key => {
    sortDirection[key] = sortDirection[key] === "asc" ? "desc" : "asc";
    setSortDirection({ ...sortDirection
    });
    onSorting(key, sortDirection[key]);
  };

  const onPaginationChanged = type => {
    switch (type) {
      case "first":
        pagination.page = 0;
        pagination.range.start = 0;
        pagination.range.end = pagination.rowPerPage;
        setPagination({ ...pagination
        });
        break;

      case "last":
        pagination.page = maxPages - 1;
        pagination.range.start = pagination.page * pagination.rowPerPage;
        pagination.range.end = pagination.page * pagination.rowPerPage + pagination.rowPerPage;
        setPagination({ ...pagination
        });
        break;

      case "next":
        pagination.page += 1;
        pagination.range.start = pagination.page * pagination.rowPerPage;
        pagination.range.end = pagination.page * pagination.rowPerPage + pagination.rowPerPage;
        setPagination({ ...pagination
        });
        break;

      case "prev":
        pagination.page -= 1;
        pagination.range.start = pagination.page * pagination.rowPerPage;
        pagination.range.end = pagination.page * pagination.rowPerPage + pagination.rowPerPage;
        setPagination({ ...pagination
        });
        break;
    }

    setData([...tableData.slice(pagination.range.start, pagination.range.end)]);
  };

  const onSearch = value => {
    setSearchableText(value);
    const filter = tableData.filter(row => JSON.stringify(row).toLowerCase().match(value.toLowerCase())).slice(0, pagination.rowPerPage);
    setData([...filter]);
  };

  const onSorting = (type, direction) => {
    const sorted = data.sort((prev, next) => {
      const x = prev[type];
      const y = next[type];
      return x < y ? direction === "asc" ? -1 : 1 : x > y ? direction === "asc" ? 1 : -1 : 0;
    });
    setData([...sorted]);
  };

  return React.createElement("div", {
    className: styles['ui-data-table-tek']
  }, React.createElement("div", {
    className: styles["show-global-search"]
  }, React.createElement("div", {
    className: styles["table-title"]
  }, props === null || props === void 0 ? void 0 : props.title), React.createElement("div", null, React.createElement("input", {
    type: "text",
    value: searchableText,
    onChange: event => onSearch(event.target.value)
  }))), selectedRows.length ? React.createElement("div", {
    className: styles["table-selected-rows"]
  }, React.createElement("div", null, React.createElement("p", null, selectedRows.length, " Rows selected", React.createElement("span", {
    className: styles["do-with-selected"],
    onClick: () => props !== null && props !== void 0 && props.onSelectedRows ? props.onSelectedRows(selectedRows) : null
  }, "Do Something ?")))) : undefined, React.createElement("table", {
    className: `${props.className} ${styles['data-table']}`
  }, React.createElement("thead", null, React.createElement("tr", null, props.checkbox && React.createElement("th", null, React.createElement(Checkbox, {
    checked: selectedRows.length > 0 ? true : false,
    onClick: event => {
      if (event.target.checked) {
        setSelectedRows([...data]);
      } else {
        setSelectedRows([]);
      }
    }
  })), columns.map(column => React.createElement("th", {
    key: column.accessor
  }, React.createElement("div", {
    className: props.sortable ? styles['show-pointer'] : '',
    onClick: () => updateSortDirection(column.accessor)
  }, column.label, props.sortable && React.createElement("span", {
    className: styles["sortable-column"]
  }, sortDirection[column.accessor] === "asc" && React.createElement(FaSortDown, null), sortDirection[column.accessor] === "desc" && React.createElement(FaSortUp, null), sortDirection[column.accessor] === null && React.createElement(FaSort, null))))))), React.createElement("tbody", null, data.map((row, index) => React.createElement("tr", {
    key: index
  }, props.checkbox && React.createElement("td", null, React.createElement(Checkbox, {
    checked: selectedRows.find(selected => row.id === selected.id) ? true : false,
    onClick: event => {
      if (event.target.checked) selectedRows.push(row);else selectedRows.map((selected, index) => {
        if (selected.id === row.id) selectedRows.splice(index, 1);
      });
      setSelectedRows([...selectedRows]);
    },
    size: 'small',
    color: "primary"
  })), columns.map(column => React.createElement("td", {
    key: column.accessor + index
  }, row[column.accessor])))))), React.createElement("div", null, React.createElement("div", {
    className: styles["table-footer"]
  }, React.createElement("div", {
    className: styles["table-footer-left"]
  }, React.createElement("div", {
    className: styles["table-footer-left-2"]
  }, "Showing ", pagination.range.start, " to ", pagination.range.end, " of ", tableData.length, " entries"), props.showAll && React.createElement("div", null, React.createElement("span", {
    className: styles["show-all-data"]
  }, React.createElement(Checkbox, {
    onClick: event => {
      if (event.target.checked) {
        setData([...tableData]);
        pagination.range.end = tableData.length;
        setPagination({ ...pagination
        });
      } else {
        pagination.range.end = rowPerPage;
        setPagination({ ...pagination
        });
        setData(tableData.slice(pagination.range.start - 1, pagination.range.end));
      }
    }
  }), " Show All"))), React.createElement("div", {
    className: styles["table-footer-right"]
  }, React.createElement(Button, {
    onClick: () => onPaginationChanged("first"),
    variant: 'outlined',
    size: "small",
    color: "primary",
    disabled: pagination.page === 0
  }, "First"), React.createElement(Button, {
    onClick: () => onPaginationChanged("prev"),
    variant: 'outlined',
    size: "small",
    color: "primary",
    disabled: pagination.page === 0
  }, "Previous"), React.createElement(Button, {
    variant: 'outlined',
    size: "small",
    color: "primary",
    disabled: true
  }, pagination.page + 1), React.createElement(Button, {
    onClick: () => onPaginationChanged("next"),
    variant: 'outlined',
    size: "small",
    color: "primary",
    disabled: pagination.page >= maxPages - 1
  }, "Next"), React.createElement(Button, {
    onClick: () => onPaginationChanged("last"),
    variant: 'outlined',
    size: "small",
    color: "primary",
    disabled: pagination.page >= maxPages - 1
  }, "Last")))));
};

const WelcomePage = props => {
  return React.createElement("div", null, React.createElement("header", null, props.title), props.children);
};

export { DataTable, WelcomePage };
//# sourceMappingURL=index.modern.js.map
