/**
 * Created by echo on 2017/1/4.
 */
import React, { Component, PropTypes } from 'react';

import styles from './TopBar.less';

class TopBar extends Component {

    render() {
        const { number, time } = this.props;
        return (
                <div style={{ width: "100%", height: 50 }}>
                    <div className={styles.container_div}/>
                    <div className={`row ${styles.row_div}`}>
                        <div className={`col-md-1 ${styles.avatar_div}`}>头像</div>
                        <div className={`col-md-9 ${styles.number_div}`}>{ number   }</div>
                        <div className={`col-md-2 ${styles.time_div}`}>{ time }</div>
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
