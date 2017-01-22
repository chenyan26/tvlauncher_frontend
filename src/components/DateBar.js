/**
 * Created by echo on 2017/1/20.
 */
import React, { Component, PropTypes } from 'react';

import styles from './DateBar.less';

import tqImg from '../img/icon/tq.png';

class DateBar extends Component {

    render() {
        const { date, time, weather } = this.props;
        return (
                <div className={styles.date_bar}>
                    <span className={styles.date_item_date}> { date } </span>
                    <span className={styles.date_item_hr}> | </span>
                    <div className={styles.date_item_icon}>
                        <img src={tqImg} alt="天气图标"/>
                    </div>
                    <span className={styles.date_item_weather}> { weather } </span>
                    <span className={styles.date_item_time}> { time } </span>
                </div>
        );
    }
}

DateBar.propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired
};

export default DateBar;
