/**
 * Created by echo on 2017/1/3.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import TopBar from '../components/TopBar';
import DateBar from '../components/DateBar';

// <Menu.Item key="vod_record">VoD点播记录
//   <Link to="vod_record"/>
// </Menu.Item>

import styles from './Container.less';

class Container extends Component {

  render() {
    const { number, date, time, weather, frame, dispatch } = this.props;
    const topBarProps = {
      number: number,
      dispatch: dispatch
    };
    const dateBarProps = {
      date: date,
      time: time,
      weather: weather
    };
    return (
            <div className={styles.container_div}>
              <TopBar {...topBarProps}/>
              <DateBar {...dateBarProps}/>

              {this.props.children}

            </div>
    );
  }
}

Container.propTypes = {
  number: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  number: state.app.number,
  date: state.app.date,
  time: state.app.time,
  weather: state.app.weather,
  loading : state.loading.models.app,
});

export default connect(mapStateToProps)(Container);
