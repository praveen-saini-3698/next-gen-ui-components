import 'react-confirm-alert/src/react-confirm-alert.css';
import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
export { confirmAlert as ConfirmationAlert } from 'react-confirm-alert';

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

var styles = {"ui-data-table-tek":"_27W74","data-table":"_3fMGm","sortable-column":"_2xDhl","action-buttons":"_3Bd-C","trash":"_1hW9J","edit":"_2PEg8","no-row-found":"_2f_oI","bordered":"_3y7kh","show-pointer":"_2yfNS","show-global-search":"_2Sx3R","table-title":"_HTXGl","table-footer":"_1V7LX","table-footer-left":"_NVrA3","table-footer-left-2":"_o_eOA","show-all-data":"_Ve8dK","table-footer-right":"_2iwvf","current-page":"_teB0r","table-selected-rows":"_o5Ukt","do-with-selected":"_3BxJo"};

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
function FaEdit (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}}]})(props);
}function FaSortDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"}}]})(props);
}function FaSortUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"}}]})(props);
}function FaSort (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"}}]})(props);
}function FaTrash (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}}]})(props);
}

var styles$1 = {"ui-button":"_2ikbR","btn":"_1XQnL","btn-check":"_3yaTV","active":"_3OWpa","show":"_1vE86","disabled":"_3UNgo","btn-primary":"_2wDIO","btn-secondary":"_2dwTy","btn-success":"_1cK6c","btn-info":"_3_lw7","btn-warning":"_2YfZH","btn-danger":"_1I36B","btn-light":"_YgLAW","btn-dark":"_-cY_C","btn-outline-primary":"_1tk7q","btn-outline-secondary":"_qS70k","btn-outline-success":"_a7-My","btn-outline-info":"_rV9hD","btn-outline-warning":"_1ZA2v","btn-outline-danger":"_3CVr0","btn-outline-light":"_gWEG9","btn-outline-dark":"_wAZ7H","btn-link":"_2vgXB","btn-group-lg":"_3D8gs","btn-lg":"_2Spms","btn-group-sm":"_1XbTr","btn-sm":"_12im-"};

var Button = (function (props) {
  var _props$className;

  var _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? "filled" : _props$variant,
      _props$size = props.size,
      size = _props$size === void 0 ? "sm" : _props$size;
  return React.createElement("div", {
    className: styles$1['ui-button'] + " " + ((_props$className = props.className) != null ? _props$className : '')
  }, React.createElement("button", {
    style: props.style,
    onClick: props.onClick,
    disabled: props.disabled,
    className: styles$1['btn'] + " " + styles$1["btn-" + color] + " " + styles$1["btn-" + size] + " " + styles$1["btn-" + variant],
    title: props.title
  }, props.children));
});

var styles$2 = {"ui-checkbox":"_bDaIH","form-check":"_jjM_l","form-check-input":"_2-PZA","form-check-reverse":"_3s_S2","form-check-label":"_1dMUQ","form-switch":"_34T52"};

var Checkbox = (function (props) {
  var _props$className;

  return React.createElement("div", {
    className: styles$2['form-check'] + " " + ((_props$className = props.className) != null ? _props$className : '')
  }, React.createElement("input", {
    type: "checkbox",
    style: props.style,
    className: styles$2['form-check-input'],
    onClick: props.onClick,
    disabled: props.disabled,
    title: props.title,
    checked: props.checked
  }), React.createElement("label", {
    className: styles$2["form-check-label"]
  }, props.children));
});

var index = (function (props) {
  var _props$rowPerPage, _props$pagination;

  var tableData = [].concat(props.data);

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

  var onDelete = function onDelete(event, row, index) {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to delete this ?',
      buttons: [{
        label: 'Yes',
        style: {
          backgroundColor: 'rgb(0, 102, 255)'
        },
        onClick: function onClick() {
          var _tableData$find;

          var rowDetails = _extends({}, row);

          var actualIndex = (_tableData$find = tableData.find(function (rw) {
            return rw.id === row.id;
          })) === null || _tableData$find === void 0 ? void 0 : _tableData$find.id;
          tableData.splice(actualIndex, 1);
          data.splice(index, 1);
          setData([].concat(data));
          return props.onDelete ? props.onDelete(event, rowDetails) : undefined;
        }
      }, {
        label: 'No',
        onClick: function onClick() {}
      }]
    });
  };

  var onSearch = function onSearch(value) {
    setSearchableText(value);
    var filter = tableData.filter(function (row) {
      return JSON.stringify(row).toLowerCase().match(value.toLowerCase());
    }).slice(0, pagination.rowPerPage);
    setData([].concat(filter));
    if (props.onSearch) props.onSearch(value);
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
  }))), React.createElement("table", {
    className: ("" + (props.className ? props.className.concat(' ') : '') + styles['data-table'] + " " + (props.bordered ? " " + styles['bordered'] : '')).trim()
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
  }), (props.showEdit || props.showDelete) && React.createElement("th", null, "Action"))), React.createElement("tbody", null, data.length ? data.map(function (row, index) {
    return React.createElement("tr", {
      key: index,
      onClick: function onClick(e) {
        return props.onRowClick ? props.onRowClick(e, _extends({}, row)) : undefined;
      }
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
        key: column.accessor + index,
        onClick: function onClick(e) {
          return props.onCellClick ? props.onCellClick(e, row[column.accessor]) : undefined;
        }
      }, row[column.accessor]);
    }), (props.showDelete || props.showEdit) && React.createElement("td", {
      className: styles['action-buttons']
    }, props.showEdit && React.createElement(FaEdit, {
      onClick: function onClick(e) {
        return props.onEdit ? props.onEdit(e, _extends({}, row)) : undefined;
      },
      className: styles['edit']
    }), props.showDelete && React.createElement(FaTrash, {
      onClick: function onClick(e) {
        return onDelete(e, _extends({}, row), index);
      },
      className: styles['trash']
    })));
  }) : React.createElement("tr", {
    className: styles['no-row-found']
  }, React.createElement("td", {
    colSpan: columns.length + (props.checkbox ? 1 : 0) + (props.showDelete ? 1 : 0) + (props.showEdit ? 1 : 0)
  }, "No Rows Found")))), React.createElement("div", null, React.createElement("div", {
    className: styles["table-footer"]
  }, React.createElement("div", {
    className: styles["table-footer-left"]
  }, React.createElement("div", {
    className: styles["table-footer-left-2"]
  }, "Showing ", data.length, " of ", tableData.length, " entries"), props.showAll && React.createElement("div", {
    className: styles["show-all-data"]
  }, React.createElement("span", null, React.createElement(Checkbox, {
    onClick: function onClick(event) {
      if (event.target.checked) {
        setData([].concat(tableData));
        pagination.range.end = tableData.length;
        setPagination(_extends({}, pagination));
      } else {
        pagination.range.end = rowPerPage;
        setPagination(_extends({}, pagination));
        setData([].concat(tableData.slice(pagination.range.start - 1, pagination.range.end)));
      }
    }
  }, "Show All")))), React.createElement("div", {
    className: styles["table-footer-right"]
  }, React.createElement(Button, {
    onClick: function onClick() {
      return onPaginationChanged("first");
    },
    variant: 'outlined',
    size: "sm",
    color: "primary",
    disabled: pagination.page === 0
  }, "First"), React.createElement(Button, {
    onClick: function onClick() {
      return onPaginationChanged("prev");
    },
    variant: 'outlined',
    size: "sm",
    color: "primary",
    disabled: pagination.page === 0
  }, "Previous"), React.createElement("div", {
    className: styles['current-page']
  }, pagination.page + 1), React.createElement(Button, {
    onClick: function onClick() {
      return onPaginationChanged("next");
    },
    variant: 'outlined',
    size: "sm",
    color: "primary",
    disabled: pagination.page >= maxPages - 1
  }, "Next"), React.createElement(Button, {
    onClick: function onClick() {
      return onPaginationChanged("last");
    },
    variant: 'outlined',
    size: "sm",
    color: "primary",
    disabled: pagination.page >= maxPages - 1
  }, "Last")))), selectedRows.length ? React.createElement("div", {
    className: styles["table-selected-rows"]
  }, React.createElement("div", null, React.createElement("p", null, selectedRows.length, " Rows selected", React.createElement("span", {
    className: styles["do-with-selected"],
    onClick: function onClick() {
      return props !== null && props !== void 0 && props.onSelectedRows ? props.onSelectedRows([].concat(selectedRows)) : null;
    }
  }, "Do Something ?")))) : undefined);
});

var index$1 = (function (props) {
  return React.createElement("div", null, React.createElement("header", null, props.title), props.children);
});

var styles$3 = {"record-view":"_hVJWn","record-header":"_2xWsK","record-content":"_1BH2o","item":"_3i9ES","label":"_DcATi","value":"_2pZVI","record-item":"_dhgW7"};

var convertValue = function convertValue(type, value) {
  if ([null, undefined, "", 0, [], {}].includes(value)) return value;
  var formattedValue = null;

  switch (type) {
    case "boolean":
      formattedValue = ["yes", "true", true, 1, "1"].includes(value) ? "Yes" : "No";
      break;

    case "number":
      formattedValue = parseFloat(value).toFixed(2);
      break;

    case "date":
      formattedValue = new Date(value).toLocaleString('default', {
        month: 'long',
        year: 'numeric',
        day: 'numeric'
      });
      break;

    case "datetime":
      formattedValue = new Date(value).toLocaleString('default', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      });
      break;

    case "amount":
      formattedValue = parseFloat(Number(value).toFixed(2)).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
      });
      break;

    case "avatar":
      formattedValue = value;
      break;

    case "string":
      formattedValue = JSON.stringify(value).replace(/"/g, '');
  }
  return formattedValue;
};

var index$2 = (function (props) {
  return React.createElement("div", {
    className: styles$3['record-view']
  }, React.createElement("div", {
    className: styles$3['record-header']
  }, props.title), React.createElement("div", {
    className: styles$3['record-content']
  }, Object.entries(props.record).map(function (_ref) {
    var value = _ref[1];
    return props.view === "simple" ? React.createElement("div", {
      className: styles$3['item']
    }, React.createElement("div", {
      className: styles$3['label']
    }, value.label), React.createElement("div", {
      className: styles$3['value']
    }, convertValue(value.type, value.value))) : React.createElement("div", {
      className: styles$3['record-item']
    }, React.createElement("div", {
      className: styles$3['label']
    }, React.createElement("label", null, value.label)), React.createElement("div", {
      className: styles$3['value']
    }, convertValue(value.type, value.value)));
  })));
});

var styles$4 = {"form-field":"_3Jrm_","form-field-email":"_3Xqzv","form-lebel":"_2_91p","form-field-number":"_Gdz8E","form-field-text":"_3tZ64","form-field-date":"_26VyR","form-field-datetime":"_10QmK","form-field-datetime-local":"_uB8zp","form-field-url":"_55_8Y","form-field-time":"_2tb9X","form-field-week":"_1Ham7","form-field-tel":"_3oF8x","form-field-range":"_3jz37","form-field-image":"_2YtyO","form-field-file":"_35MCr","form-field-search":"_23isO","form-field-month":"_2HtUu","form-field-password":"_12KEU","form-label":"_3ePF5","form-input":"_1sS57","type-button":"_lb08b","type-reset":"_2Wx8E","type-submit":"_38I3Y","type-checkbox":"_1v7S1","type-radio":"_2H_iS","type-date":"_2ZeN0","type-datetime":"_2FJ4A","type-datetime-local":"_2D7h7","type-month":"_2CGqc","type-text":"_2I7ug","type-email":"_3wQoe","type-url":"_14sFE","type-week":"_10L_g","type-search":"_2UGCO","type-tel":"_1aeFo","type-time":"_38vQF","type-range":"_1aEgJ","type-file":"_VTdAm","type-image":"_3boYO","type-password":"_26Y6Q","type-number":"_3p-Cm"};

var GenericComponent = (function (props) {
  return React.createElement("div", {
    className: styles$4['form-field'] + " " + styles$4['form-field-' + props.type] + " " + styles$4['inputField']
  }, props.label && props.position !== "after" && React.createElement("span", {
    className: "" + styles$4["form-label"]
  }, props.label), React.createElement("input", {
    className: styles$4["form-input"] + " " + styles$4["type-" + props.type],
    autoFocus: props.autoFocus,
    checked: props.checked,
    disabled: props.disabled,
    height: props.height,
    list: props.list,
    max: props.max,
    maxLength: props.maxLength,
    min: props.min,
    minLength: props.minLength,
    multiple: props.multiple,
    name: props.name,
    pattern: props.pattern,
    placeholder: props.placeholder,
    readOnly: props.readOnly,
    required: props.required,
    size: props.size,
    src: props.src,
    step: props.step,
    value: props.value,
    width: props.width,
    style: props.style,
    type: props.type,
    onChange: props.onChange
  }), props.label && props.position === "after" && React.createElement("span", {
    className: "" + styles$4["form-label"]
  }, props.label));
});

var styles$5 = {"form-builder":"_2s6yy","form-title":"_2o7D0","form-container":"_1VnC0","form-actions":"_3FnHc"};

var index$3 = (function (props) {
  var _React$useState = React.useState({}),
      form = _React$useState[0],
      setForm = _React$useState[1];

  var _React$useState2 = React.useState({}),
      formSchema = _React$useState2[0],
      setFormSchema = _React$useState2[1];

  var _React$useState3 = React.useState(true),
      initializing = _React$useState3[0],
      setFormInitializing = _React$useState3[1];

  React.useEffect(function () {
    props.schema.forEach(function (field) {
      var _field$value;

      return field.name ? form[field.name] = (_field$value = field.value) != null ? _field$value : null : undefined;
    });
    setFormSchema(_extends({}, form));
    setFormInitializing(false);
  }, []);

  var onValueChange = function onValueChange(name, value) {
    var _extends2;

    setForm(_extends({}, form, (_extends2 = {}, _extends2[name] = value, _extends2)));
  };

  return React.createElement("div", {
    className: styles$5['form-builder']
  }, React.createElement("div", {
    className: styles$5['form-title']
  }, React.createElement("h2", null, "Form Title")), !initializing && React.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      if (props.onSubmit) props.onSubmit(e, form);
    },
    onReset: function onReset() {
      return setForm(_extends({}, formSchema));
    }
  }, React.createElement("div", {
    className: styles$5['form-container']
  }, props.schema.map(function (field) {
    return React.createElement(GenericComponent, Object.assign({}, field, {
      value: form[field.name],
      onChange: function onChange(e) {
        return onValueChange(field.name, e.target.value);
      }
    }));
  })), React.createElement("div", {
    className: styles$5['form-actions']
  }, React.createElement(GenericComponent, {
    type: "submit"
  }), React.createElement(GenericComponent, {
    type: "reset"
  }))));
});

export { Button, Checkbox, index as DataTable, index$3 as FormBuilder, GenericComponent, index$2 as RecordView, index$1 as WelcomePage };
//# sourceMappingURL=index.modern.js.map
