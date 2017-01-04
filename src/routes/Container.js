/**
 * Created by echo on 2017/1/3.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import TopBar from '../components/TopBar';
// <Menu.Item key="vod_record">VoD点播记录
//   <Link to="vod_record"/>
// </Menu.Item>

import styles from './Container.less';

class Container extends Component {

  render() {
    const { number, time } = this.props;
    const topBarProps = {
      number: number,
      time: time
    };
    return (
            <div className={styles.my_container_div}>
              <div className={styles.my_home_background_div}>

                <TopBar {...topBarProps}/>

                {this.props.children}

              </div>
            </div>
    );
  }
}

Container.propTypes = {
  number: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  number: state.app.number,
  time: state.app.time,
  loading : state.loading.models.app,
});

export default connect(mapStateToProps)(Container);
