/**
  * hb-scripts v1.0.0
  * (c) 2020 xing
  * @license MIT
  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.HXLibrary = {}, global.React));
}(this, (function (exports, React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    // import classNames from 'classnames';
    // const Start = (props) => {
    //     return (
    //         <div>
    //             文件2
    //         </div>
    //     );
    // };
    // export default Start;
    class Start extends React__default['default'].Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        render() {
            return (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", { className: "project-start" }, "\u6309\u94AE2")));
        }
    }

    const version = '1.0.0';

    exports.Start = Start;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
