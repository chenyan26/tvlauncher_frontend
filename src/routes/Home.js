/**
 * Created by echo on 2017/1/3.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

import Slider from 'react-slick';

import styles from './Home.less';

class Home extends React.Component {
    state = ({
        divs:[
            {title: "视频", img: "src/img/card/v.jpg", url: "ship"},
            {title: "直播", img: "src/img/card/1.jpg", url: "zhibo"},
            {title: "回看／点播／VR", img: "src/img/card/2.jpg", url: "huikan"},
            {title: "视频通信", img: "src/img/card/3.jpg", url: "shiping"},
            {title: "消息中心", img: "src/img/card/4.jpg", url: "xiaoxi"},
            {title: "娱乐游戏", img: "src/img/card/5.jpg", url: "yule"},
            {title: "系统服务", img: "src/img/card/6.jpg", url: "xitong"} ],
        selected: 0
    });

    jsCallAndroid =(tabIndex) =>{
        switch (tabIndex) {
            case 101:
                android.showToast("hello");
                break;
            case 104:
                android.clearWebCache(true);
                break;
            case 105:
                android.installApk('http://119.44.217.18/doudou-debug_v1.0.2a.apk');
                break;
            case 106:
                android.startActivity('android.settings.SETTINGS');
                break;
            default:
                break;

        }
    };

    componentDidMount() {
        $(function() {
            $("#mainSlider a").on("keydown",function(evt){
                var tabIndex = parseInt($(this).attr("tabindex"));
                console.log("tabIndex=" + tabIndex);
                switch (evt.which) {
                    case 13:
                        alert("选择了：" + tabIndex);
                        this.jsCallAndroid(tabIndex);
                        break;
                    case 38: //上
                        tabIndex = 1;
                        break;
                    case 40: //下
                        tabIndex = 201;
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

    //----------------render--------------------

    render() {
        const settings = {
            className: 'slider variable-width',
            dots: false,
            infinite: false,
            centerMode: false,
            slidesToShow: 4,
            // slidesToScroll: 2,
            variableWidth: true,
            arrows: false,
        };
        return (
                <div className={styles.container_div}>
                    <div id="mainSlider" className={styles.slider_div}>
                        <Slider ref={c => this.slider = c } {...settings}>
                            {this.state.divs.map((obj, index) => {
                                return(
                                        <div key={index} style={index ? {width: 240} : {width: 490}}>
                                            <a className="cGridImg" tabIndex={101 + index}>
                                                <img src={obj.img}/>
                                            </a>
                                        </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
        );
    }
}

Home.propTypes = {
    // time: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
    return {
        // time: state.app.time,
        // loading : state.loading.models.app,
    }
}

export default connect(mapStateToProps)(Home)
