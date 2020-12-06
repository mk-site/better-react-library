import React from 'react';
import './index.css';

// import classNames from 'classnames';
const Button = ({ children }) => {
    return (React.createElement("div", { className: "vik-btn" }, children));
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

export default Button;
