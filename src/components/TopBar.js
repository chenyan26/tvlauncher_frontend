/**
 * Created by echo on 2017/1/4.
 */
import React, { Component, PropTypes } from 'react';

import styles from './TopBar.less';

class TopBar extends Component {

    componentDidMount() {
        $(function() {
            $("#topBar a").on("keydown",function(evt){
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
                    $("a[tabindex=" + tabIndex + "]").focus();
                    return false;
                }
                return true;
            });
        });
    }

    render() {
        const { number, time } = this.props;
        return (
                <div className={styles.top_bar}>
                    <div id="topBar" className={styles.top_bar_row}>
                        <a tabIndex="1" className={styles.top_avatar}>
                            <img src="src/img/icon/avatar.png" alt="头像"/>
                        </a>
                        <a tabIndex="2" className={styles.top_item}>{ number }</a>
                        <a tabIndex="3" className={styles.top_item}>{ time }</a>
                        <a tabIndex="4" className={styles.top_item}>阴20度</a>
                        <a tabIndex="5" className={styles.top_item}>17：23</a>
                    </div>
                    <div className={styles.top_bar_bg}></div>
                </div>
        );
    }
}

TopBar.propTypes = {
    number: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default TopBar;
