function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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

var styles = {"ui-data-table-tek":"_27W74","data-table":"_3fMGm","sortable-column":"_2xDhl","show-pointer":"_2yfNS","show-global-search":"_2Sx3R","table-title":"_HTXGl","table-footer":"_1V7LX","table-footer-left":"_NVrA3","table-footer-left-2":"_o_eOA","show-all-data":"_Ve8dK","table-footer-right":"_2iwvf","table-selected-rows":"_o5Ukt","do-with-selected":"_3BxJo"};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && React.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FaSortDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"}}]})(props);
}function FaSortUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"}}]})(props);
}function FaSort (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"}}]})(props);
}

var Button = (function (props) {
  return React.createElement("button", {
    style: props.style,
    className: props.className,
    onClick: props.onClick,
    disabled: props.disabled,
    title: props.title
  }, props.children);
});

var Checkbox = (function (props) {
  return React.createElement("input", {
    type: "checkbox",
    style: props.style,
    className: props.className,
    onClick: props.onClick,
    disabled: props.disabled,
    title: props.title
  }, props.children);
});

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
    className: styles['ui-data-table-tek']
  }, React.createElement("div", {
    className: styles["show-global-search"]
  }, React.createElement("div", {
    className: styles["table-title"]
  }, props === null || props === void 0 ? void 0 : props.title), React.createElement("div", null, React.createElement("input", {
    type: "text",
    value: searchableText,
    onChange: function onChange(event) {
      return onSearch(event.target.value);
    }
  }))), selectedRows.length ? React.createElement("div", {
    className: styles["table-selected-rows"]
  }, React.createElement("div", null, React.createElement("p", null, selectedRows.length, " Rows selected", React.createElement("span", {
    className: styles["do-with-selected"],
    onClick: function onClick() {
      return props !== null && props !== void 0 && props.onSelectedRows ? props.onSelectedRows(selectedRows) : null;
    }
  }, "Do Something ?")))) : undefined, React.createElement("table", {
    className: "" + (props.className ? props.className.concat(' ') : '') + styles['data-table']
  }, React.createElement("thead", null, React.createElement("tr", null, props.checkbox && React.createElement("th", null, React.createElement(Checkbox, {
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
      className: props.sortable ? styles['show-pointer'] : '',
      onClick: function onClick() {
        return updateSortDirection(column.accessor);
      }
    }, column.label, props.sortable && React.createElement("span", {
      className: styles["sortable-column"]
    }, sortDirection[column.accessor] === "asc" && React.createElement(FaSortDown, null), sortDirection[column.accessor] === "desc" && React.createElement(FaSortUp, null), sortDirection[column.accessor] === null && React.createElement(FaSort, null))));
  }))), React.createElement("tbody", null, data.map(function (row, index) {
    return React.createElement("tr", {
      key: index
    }, props.checkbox && React.createElement("td", null, React.createElement(Checkbox, {
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
    className: styles["table-footer"]
  }, React.createElement("div", {
    className: styles["table-footer-left"]
  }, React.createElement("div", {
    className: styles["table-footer-left-2"]
  }, "Showing ", pagination.range.start, " to ", pagination.range.end, " of ", tableData.length, " entries"), props.showAll && React.createElement("div", null, React.createElement("span", {
    className: styles["show-all-data"]
  }, React.createElement(Checkbox, {
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
    className: styles["table-footer-right"]
  }, React.createElement(Button, {
    onClick: function onClick() {
      return onPaginationChanged("first");
    },
    variant: 'outlined',
    size: "small",
    color: "primary",
    disabled: pagination.page === 0
  }, "First"), React.createElement(Button, {
    onClick: function onClick() {
      return onPaginationChanged("prev");
    },
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
    onClick: function onClick() {
      return onPaginationChanged("next");
    },
    variant: 'outlined',
    size: "small",
    color: "primary",
    disabled: pagination.page >= maxPages - 1
  }, "Next"), React.createElement(Button, {
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

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.DataTable = DataTable;
exports.WelcomePage = WelcomePage;
//# sourceMappingURL=index.js.map
