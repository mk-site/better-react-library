'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('./index.css');

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

exports.default = Start;
