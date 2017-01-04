/**
 * Created by echo on 2017/1/4.
 */
import React, { Component, PropTypes } from 'react';

import styles from './TopBar.less';

class TopBar extends Component {

    render() {
        const { number, time } = this.props;
        return (
                <div className={styles.my_top_div}>
                    <div className="row">
                        <div className="col-md-10">{ number }</div>
                        <div className="col-md-2">{ time }</div>
                    </div>
                </div>
        );
    }
}

TopBar.propTypes = {
    number: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default TopBar;
