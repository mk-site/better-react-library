'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('./index.css');

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

exports.default = Button;
