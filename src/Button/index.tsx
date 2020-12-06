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
        return (
            <React.Fragment>
                <div className="project-start">
                    按钮2
                </div>
            </React.Fragment>
        );
    }
}

export default Start;