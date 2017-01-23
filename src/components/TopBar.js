/**
 * Created by echo on 2017/1/4.
 */
import React, { Component, PropTypes } from 'react';

import styles from './TopBar.less';

import avatarImg from '../img/icon/avatar.png';
import wifiImg from '../img/icon/wifi1.png';
import topbgImg from '../img/topbg20.jpg';

class TopBar extends Component {
    componentDidMount() {
        $("#topBar button").on("keydown",function(evt){
            var tabIndex = parseInt($(this).attr("tabindex"));
            console.log("tabIndex=" + tabIndex);
            if (evt.which == 13) {
                switch (tabIndex) {
                    case 1:
                        alert("选择了：" + tabIndex +"--视频管家");
                        break;
                    case 2:
                        alert("选择了：" + tabIndex +"--消息");
                        break;
                    case 3:
                        alert("选择了：" + tabIndex +"--账号");
                        break;
                    default:
                        break;
                }
            }
            return true;
        });
    }

    render() {
        const { number } = this.props;
        return (
                <div className={styles.top_bar}>
                    <div id="topBar" className={styles.top_bar_row}>
                        <button tabIndex="1" className={styles.top_btn_1}>
                            <img src={avatarImg} alt="头像"/>
                            视频管家
                        </button>
                        <button tabIndex="2" className={styles.top_btn_2}>
                            <img src={avatarImg} alt="头像"/>
                            消息
                        </button>
                        <button tabIndex="3" className={styles.top_account}>
                            <img src={avatarImg} alt="头像"/>
                            { number }
                        </button>
                        <div className={styles.top_wifi}>
                            <img src={wifiImg} alt="wifi"/>
                        </div>
                    </div>
                    <div className={styles.top_bar_bg}>
                        <img src={topbgImg} alt="背景条"/>
                    </div>
                </div>
        );
    }
}

TopBar.propTypes = {
    number: PropTypes.string.isRequired,
};

export default TopBar;
