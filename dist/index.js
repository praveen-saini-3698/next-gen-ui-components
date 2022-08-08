function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var fa = require('react-icons/fa');
var material = require('@mui/material');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var DataTable = function DataTable(props) {
  var _props$rowPerPage, _props$pagination;

  var tableData = props.data;

  var _React$useState = React.useState(props.columns),
      columns = _React$useState[0];

  var _React$useState2 = React.useState([]),
      selectedRows = _React$useState2[0],
      setSelectedRows = _React$useState2[1];

  var _React$useState3 = React.useState({}),
      sortDirection = _React$useState3[0],
      setSortDirection = _React$useState3[1];

  var _React$useState4 = React.useState((_props$rowPerPage = props.rowPerPage) != null ? _props$rowPerPage : 10),
      rowPerPage = _React$useState4[0];

  var _React$useState5 = React.useState(),
      searchableText = _React$useState5[0],
      setSearchableText = _React$useState5[1];

  var _React$useState6 = React.useState((_props$pagination = props.pagination) != null ? _props$pagination : {
    page: 0,
    rowPerPage: rowPerPage,
    range: {
      start: 1,
      end: rowPerPage
    }
  }),
      pagination = _React$useState6[0],
      setPagination = _React$useState6[1];

  var _React$useState7 = React.useState(tableData.slice(pagination.range.start - 1, pagination.range.end)),
      data = _React$useState7[0],
      setData = _React$useState7[1];

  var _React$useState8 = React.useState(Math.ceil(tableData.length / pagination.rowPerPage)),
      maxPages = _React$useState8[0];

  React.useEffect(function () {
    if (props.sortable) {
      columns.forEach(function (column) {
        return sortDirection[column.accessor] = null;
      });
      setSortDirection(_extends({}, sortDirection));
    }
  }, []);

  var updateSortDirection = function updateSortDirection(key) {
    sortDirection[key] = sortDirection[key] === "asc" ? "desc" : "asc";
    setSortDirection(_extends({}, sortDirection));
    onSorting(key, sortDirection[key]);
  };

  var onPaginationChanged = function onPaginationChanged(type) {
    switch (type) {
      case "first":
        pagination.page = 0;
        pagination.range.start = 0;
        pagination.range.end = pagination.rowPerPage;
        setPagination(_extends({}, pagination));
        break;

      case "last":
        pagination.page = maxPages - 1;
        pagination.range.start = pagination.page * pagination.rowPerPage;
        pagination.range.end = pagination.page * pagination.rowPerPage + pagination.rowPerPage;
        setPagination(_extends({}, pagination));
        break;

      case "next":
        pagination.page += 1;
        pagination.range.start = pagination.page * pagination.rowPerPage;
        pagination.range.end = pagination.page * pagination.rowPerPage + pagination.rowPerPage;
        setPagination(_extends({}, pagination));
        break;

      case "prev":
        pagination.page -= 1;
        pagination.range.start = pagination.page * pagination.rowPerPage;
        pagination.range.end = pagination.page * pagination.rowPerPage + pagination.rowPerPage;
        setPagination(_extends({}, pagination));
        break;
    }

    setData([].concat(tableData.slice(pagination.range.start, pagination.range.end)));
  };

  var onSearch = function onSearch(value) {
    setSearchableText(value);
    var filter = tableData.filter(function (row) {
      return JSON.stringify(row).toLowerCase().match(value.toLowerCase());
    }).slice(0, pagination.rowPerPage);
    setData([].concat(filter));
  };

  var onSorting = function onSorting(type, direction) {
    var sorted = data.sort(function (prev, next) {
      var x = prev[type];
      var y = next[type];
      return x < y ? direction === "asc" ? -1 : 1 : x > y ? direction === "asc" ? 1 : -1 : 0;
    });
    setData([].concat(sorted));
  };

  return React.createElement("div", {
    className: 'ui-data-table-tek'
  }, React.createElement("div", {
    className: "show-global-search"
  }, React.createElement("div", {
    className: "table-title"
  }, props === null || props === void 0 ? void 0 : props.title), React.createElement("div", null, React.createElement("input", {
    type: "text",
    value: searchableText,
    onChange: function onChange(event) {
      return onSearch(event.target.value);
    }
  }))), selectedRows.length ? React.createElement("div", {
    className: "table-selected-rows"
  }, React.createElement("div", null, React.createElement("p", null, selectedRows.length, " Rows selected", React.createElement("span", {
    className: "do-with-selected",
    onClick: function onClick() {
      return props !== null && props !== void 0 && props.onSelectedRows ? props.onSelectedRows(selectedRows) : null;
    }
  }, "Do Something ?")))) : undefined, React.createElement("table", {
    className: props.className + " data-table"
  }, React.createElement("thead", null, React.createElement("tr", null, props.checkbox && React.createElement("th", null, React.createElement(material.Checkbox, {
    checked: selectedRows.length > 0 ? true : false,
    onClick: function onClick(event) {
      if (event.target.checked) {
        setSelectedRows([].concat(data));
      } else {
        setSelectedRows([]);
      }
    }
  })), columns.map(function (column) {
    return React.createElement("th", {
      key: column.accessor
    }, React.createElement("div", {
      className: props.sortable ? 'show-pointer' : '',
      onClick: function onClick() {
        return updateSortDirection(column.accessor);
      }
    }, column.label, props.sortable && React.createElement("span", {
      className: "sortable-column"
    }, sortDirection[column.accessor] === "asc" && React.createElement(fa.FaSortDown, null), sortDirection[column.accessor] === "desc" && React.createElement(fa.FaSortUp, null), sortDirection[column.accessor] === null && React.createElement(fa.FaSort, null))));
  }))), React.createElement("tbody", null, data.map(function (row, index) {
    return React.createElement("tr", {
      key: index
    }, props.checkbox && React.createElement("td", null, React.createElement(material.Checkbox, {
      checked: selectedRows.find(function (selected) {
        return row.id === selected.id;
      }) ? true : false,
      onClick: function onClick(event) {
        if (event.target.checked) selectedRows.push(row);else selectedRows.map(function (selected, index) {
          if (selected.id === row.id) selectedRows.splice(index, 1);
        });
        setSelectedRows([].concat(selectedRows));
      },
      size: 'small',
      color: "primary"
    })), columns.map(function (column) {
      return React.createElement("td", {
        key: column.accessor + index
      }, row[column.accessor]);
    }));
  }))), React.createElement("div", null, React.createElement("div", {
    className: "table-footer"
  }, React.createElement("div", {
    className: "table-footer-left"
  }, React.createElement("div", {
    className: "table-footer-left-2"
  }, "Showing ", pagination.range.start, " to ", pagination.range.end, " of ", tableData.length, " entries"), props.showAll && React.createElement("div", null, React.createElement("span", {
    className: "show-all-data"
  }, React.createElement(material.Checkbox, {
    onClick: function onClick(event) {
      if (event.target.checked) {
        setData([].concat(tableData));
        pagination.range.end = tableData.length;
        setPagination(_extends({}, pagination));
      } else {
        pagination.range.end = rowPerPage;
        setPagination(_extends({}, pagination));
        setData(tableData.slice(pagination.range.start - 1, pagination.range.end));
      }
    }
  }), " Show All"))), React.createElement("div", {
    className: "table-footer-right"
  }, React.createElement(material.Button, {
    onClick: function onClick() {
      return onPaginationChanged("first");
    },
    variant: 'outlined',
    size: "small",
    color: "primary",
    disabled: pagination.page === 0
  }, "First"), React.createElement(material.Button, {
    onClick: function onClick() {
      return onPaginationChanged("prev");
    },
    variant: 'outlined',
    size: "small",
    color: "primary",
    disabled: pagination.page === 0
  }, "Previous"), React.createElement(material.Button, {
    variant: 'outlined',
    size: "small",
    color: "primary",
    disabled: true
  }, pagination.page + 1), React.createElement(material.Button, {
    onClick: function onClick() {
      return onPaginationChanged("next");
    },
    variant: 'outlined',
    size: "small",
    color: "primary",
    disabled: pagination.page >= maxPages - 1
  }, "Next"), React.createElement(material.Button, {
    onClick: function onClick() {
      return onPaginationChanged("last");
    },
    variant: 'outlined',
    size: "small",
    color: "primary",
    disabled: pagination.page >= maxPages - 1
  }, "Last")))));
};

var WelcomePage = function WelcomePage(props) {
  return React.createElement("div", null, React.createElement("header", null, props.title), props.children);
};

exports.DataTable = DataTable;
exports.WelcomePage = WelcomePage;
//# sourceMappingURL=index.js.map
