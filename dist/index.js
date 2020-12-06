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
    const Button = ({ children }) => {
        return (React__default['default'].createElement("div", { className: "vik-btn" }, children));
    };
    // class Start extends React.Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {};
    //     }
    //     render() {
    //         return (
    //             <React.Fragment>
    //                 <div className="project-start">
    //                     按钮2
    //                 </div>
    //             </React.Fragment>
    //         );
    //     }
    // }
    // export default Start;

    const version = '1.0.0';

    exports.Button = Button;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
