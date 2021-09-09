'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var require$$0 = ".countryswitch {\n  position: relative;\n}\n\n.countryswitch:hover .countryswitch__list {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.countryswitch input {\n  display: none;\n}\n\n.countryswitch__list {\n  background-color: white;\n  bottom: 0;\n  list-style: none;\n  max-height: 250px;\n  opacity: 0;\n  overflow-y: auto;\n  padding: 0;\n  position: absolute;\n  pointer-events: none;\n  transform: translateY(calc(100% + 10px));\n  z-index: 1;\n}\n\n.countryswitch__list li {\n  align-items: center;\n  display: flex;\n}\n\n.countryswitch__list li:hover {\n  cursor: pointer;\n}\n\n.countryswitch__list li label {\n  padding: 4px 16px;\n}\n\n.countryswitch__list li span {\n  pointer-events: none;\n}\n\n.countryswitch .form-control svg {\n  height: 16px;\n  width: 16px;\n}";

const HelloWorldSample = ({
  selectedCountry,
  countries,
  onChange
}) => {
  const countryList = [...countries.universe];
  const selectedFlag = `fp ${selectedCountry.toLowerCase()}`;
  console.info("selectedFlag", selectedFlag);
  return react.createElement("div", {
    className: "countryswitch form-group mx-radiobuttons"
  }, react.createElement("div", {
    className: "form-control"
  }, react.createElement("span", {
    className: selectedFlag
  }), react.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, react.createElement("path", {
    d: "M4,6l4,4l4-4H4z"
  }))), react.createElement("ul", {
    className: "countryswitch__list"
  }, countryList.map(country => {
    const countryId = `country_${country}`;
    const flagpack = `fp ${country.toLowerCase()}`;
    return react.createElement("li", {
      className: country,
      key: countryId
    }, react.createElement("input", {
      id: countryId,
      type: "radio",
      name: "CountrySwitch",
      value: country,
      onChange: () => onChange(event)
    }), react.createElement("label", {
      className: "control-label",
      htmlFor: countryId
    }, react.createElement("span", {
      className: flagpack
    })));
  })));
};

class preview extends react.Component {
  render() {
    return react.createElement(HelloWorldSample, {
      countries: this.props.enumeration
    });
  }

}
function getPreviewCss() {
  return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291bnRyeVN3aXRjaC5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9IZWxsb1dvcmxkU2FtcGxlLmpzeCIsIi4uLy4uLy4uL3NyYy9Db3VudHJ5U3dpdGNoLmVkaXRvclByZXZpZXcuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3VpL2ZsYWdwYWNrLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgSGVsbG9Xb3JsZFNhbXBsZSA9ICh7IHNlbGVjdGVkQ291bnRyeSwgY291bnRyaWVzLCBvbkNoYW5nZSB9KSA9PiB7XG4gICAgY29uc3QgY291bnRyeUxpc3QgPSBbLi4uY291bnRyaWVzLnVuaXZlcnNlXTtcbiAgICBjb25zdCBzZWxlY3RlZEZsYWcgPSBgZnAgJHtzZWxlY3RlZENvdW50cnkudG9Mb3dlckNhc2UoKX1gO1xuICAgIGNvbnNvbGUuaW5mbyhcInNlbGVjdGVkRmxhZ1wiLCBzZWxlY3RlZEZsYWcpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudHJ5c3dpdGNoIGZvcm0tZ3JvdXAgbXgtcmFkaW9idXR0b25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c2VsZWN0ZWRGbGFnfT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00LDZsNCw0bDQtNEg0elwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb3VudHJ5c3dpdGNoX19saXN0XCI+XG4gICAgICAgICAgICAgICAge2NvdW50cnlMaXN0Lm1hcChjb3VudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRyeUlkID0gYGNvdW50cnlfJHtjb3VudHJ5fWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZsYWdwYWNrID0gYGZwICR7Y291bnRyeS50b0xvd2VyQ2FzZSgpfWA7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NvdW50cnl9IGtleT17Y291bnRyeUlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NvdW50cnlJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkNvdW50cnlTd2l0Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y291bnRyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9e2NvdW50cnlJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17ZmxhZ3BhY2t9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIZWxsb1dvcmxkU2FtcGxlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9IZWxsb1dvcmxkU2FtcGxlXCI7XG5cbmV4cG9ydCBjbGFzcyBwcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8SGVsbG9Xb3JsZFNhbXBsZSBjb3VudHJpZXM9e3RoaXMucHJvcHMuZW51bWVyYXRpb259IC8+O1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpZXdDc3MoKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL3VpL0NvdW50cnlTd2l0Y2guY3NzXCIpO1xufVxuIl0sIm5hbWVzIjpbIkhlbGxvV29ybGRTYW1wbGUiLCJzZWxlY3RlZENvdW50cnkiLCJjb3VudHJpZXMiLCJvbkNoYW5nZSIsImNvdW50cnlMaXN0IiwidW5pdmVyc2UiLCJzZWxlY3RlZEZsYWciLCJ0b0xvd2VyQ2FzZSIsImNvbnNvbGUiLCJpbmZvIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImNvdW50cnkiLCJjb3VudHJ5SWQiLCJmbGFncGFjayIsImV2ZW50IiwicHJldmlldyIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiZW51bWVyYXRpb24iLCJnZXRQcmV2aWV3Q3NzIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHTyxNQUFNQSxnQkFBZ0IsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLGVBQUY7QUFBbUJDLEVBQUFBLFNBQW5CO0FBQThCQyxFQUFBQTtBQUE5QixDQUFELEtBQThDO0FBQzFFLFFBQU1DLFdBQVcsR0FBRyxDQUFDLEdBQUdGLFNBQVMsQ0FBQ0csUUFBZCxDQUFwQjtBQUNBLFFBQU1DLFlBQVksR0FBSSxNQUFLTCxlQUFlLENBQUNNLFdBQWhCLEVBQThCLEVBQXpEO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLGNBQWIsRUFBNkJILFlBQTdCO0FBRUEsU0FDSUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0lBO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNJQTtBQUFNLElBQUEsU0FBUyxFQUFFSjtBQUFqQixJQURKLEVBRUlJO0FBQUssSUFBQSxPQUFPLEVBQUMsS0FBYjtBQUFtQixJQUFBLEtBQUssRUFBQyw0QkFBekI7QUFBc0QsSUFBQSxPQUFPLEVBQUM7QUFBOUQsS0FDSUE7QUFBTSxJQUFBLENBQUMsRUFBQztBQUFSLElBREosQ0FGSixDQURKLEVBT0lBO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUNLTixXQUFXLENBQUNPLEdBQVosQ0FBZ0JDLE9BQU8sSUFBSTtBQUN4QixVQUFNQyxTQUFTLEdBQUksV0FBVUQsT0FBUSxFQUFyQztBQUNBLFVBQU1FLFFBQVEsR0FBSSxNQUFLRixPQUFPLENBQUNMLFdBQVIsRUFBc0IsRUFBN0M7QUFFQSxXQUNJRztBQUFJLE1BQUEsU0FBUyxFQUFFRSxPQUFmO0FBQXdCLE1BQUEsR0FBRyxFQUFFQztBQUE3QixPQUNJSDtBQUNJLE1BQUEsRUFBRSxFQUFFRyxTQURSO0FBRUksTUFBQSxJQUFJLEVBQUMsT0FGVDtBQUdJLE1BQUEsSUFBSSxFQUFDLGVBSFQ7QUFJSSxNQUFBLEtBQUssRUFBRUQsT0FKWDtBQUtJLE1BQUEsUUFBUSxFQUFFLE1BQU1ULFFBQVEsQ0FBQ1ksS0FBRDtBQUw1QixNQURKLEVBUUlMO0FBQU8sTUFBQSxTQUFTLEVBQUMsZUFBakI7QUFBaUMsTUFBQSxPQUFPLEVBQUVHO0FBQTFDLE9BQ0lIO0FBQU0sTUFBQSxTQUFTLEVBQUVJO0FBQWpCLE1BREosQ0FSSixDQURKO0FBY0gsR0FsQkEsQ0FETCxDQVBKLENBREo7QUErQkgsQ0FwQ007O0FDQUEsTUFBTUUsT0FBTixTQUFzQkMsZUFBdEIsQ0FBZ0M7QUFDbkNDLEVBQUFBLE1BQU0sR0FBRztBQUNMLFdBQU9SLG9CQUFDLGdCQUFEO0FBQWtCLE1BQUEsU0FBUyxFQUFFLEtBQUtTLEtBQUwsQ0FBV0M7QUFBeEMsTUFBUDtBQUNIOztBQUhrQztBQU1oQyxTQUFTQyxhQUFULEdBQXlCO0FBQzVCLFNBQU9DLFVBQVA7QUFDSDs7Ozs7In0=
