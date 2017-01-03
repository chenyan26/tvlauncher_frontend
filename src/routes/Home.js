/**
 * Created by echo on 2017/1/3.
 */
/**
 * Created by echo on 2016/12/30.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

import styles from './Home.less';

class Home extends React.Component {

    //----------------render--------------------

    render() {
        return (
                <div>
                    首页
                </div>
        );
    }
}

Home.propTypes = {
};

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(Home)
