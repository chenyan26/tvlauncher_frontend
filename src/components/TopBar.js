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
        const { dispatch } = this.props;
        $(function() {
            $("#topBar button").on("keydown",function(evt){
                var tabIndex = parseInt($(this).attr("tabindex"));
                console.log("tabIndex=" + tabIndex);
                switch (evt.which) {
                    case 13:
                        alert("选择了：" + tabIndex);
                        break;
                    case 40: //下
                        tabIndex = 101;
                        break;
                    case 37: //左(会导致输入时无法使用左右移)
                        tabIndex--;
                        break;
                    case 39: //右(会导致输入时无法使用左右移)
                        tabIndex++;
                        break;
                    default:
                        return;
                }
                if (tabIndex > 0) {
                    // $(".cGridImg[tabindex=" + tabIndex + "]").focus();
                    $("button[tabindex=" + tabIndex + "]").focus();
                    $("a[tabindex=" + tabIndex + "]").focus();

                    var offset = $("a[tabindex=" + tabIndex + "]").offset();
                    var h = $("a[tabindex=" + tabIndex + "]").height();
                    var w = $("a[tabindex=" + tabIndex + "]").width();
                    var frame = {
                        offset: offset,
                        height: h,
                        width: w
                    };
                    dispatch({
                        type: 'app/changeFrame',
                        payload: {
                            frame: frame,
                        },
                    });

                    return false;
                }
                return true;
            });
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
    dispatch: PropTypes.func.isRequired,
};

export default TopBar;
