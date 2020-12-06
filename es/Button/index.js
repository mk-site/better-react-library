import React from 'react';
import './index.css';

// import classNames from 'classnames';
// const Start = (props) => {
//     return (
//         <div>
//             文件2
//         </div>
//     );
// };
// export default Start;
class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "project-start" }, "\u6309\u94AE2")));
    }
}

export default Start;
