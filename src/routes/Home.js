/**
 * Created by echo on 2017/1/3.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

import Slider from 'react-slick';

import styles from './Home.less';

import imgv from '../img/card/v.jpg';
import img1 from '../img/card/1.png';
import img2 from '../img/card/2.png';
import img3 from '../img/card/3.png';
import img4 from '../img/card/4.png';
import img5 from '../img/card/5.png';
import img6 from '../img/card/6.png';

class Home extends React.Component {
    state = ({
        divs:[
            {title: "视频", img: imgv, sImg: "src/img/card/v.jpg", url: "ship"},
            {title: "直播", img: img1, sImg: "src/img/card/1s.png", url: "zhibo"},
            {title: "回看／点播／VR", img: img2, sImg: "src/img/card/1s.png", url: "huikan"},
            {title: "视频通信", img: img3, sImg: "src/img/card/1s.png", url: "shiping"},
            {title: "消息中心", img: img4, sImg: "src/img/card/1s.png", url: "xiaoxi"},
            {title: "娱乐游戏", img: img5, sImg: "src/img/card/1s.png", url: "yule"},
            {title: "系统服务", img: img6, sImg: "src/img/card/1s.png", url: "xitong"} ],
        tabIndex: 101
    });

    componentDidMount() {
        const { dispatch } = this.props;
        $("#mainSlider a").on("keydown",function(evt){
            var tabIndex = parseInt($(this).attr("tabindex"));
            console.log("tabIndex=" + tabIndex);
            var isUp = false;
            switch (evt.which) {
                case 13: {
                    alert("选择了：" + tabIndex);
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
                }
                    break;
                case 38: //上
                    tabIndex = 1;
                    isUp = true;
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
                if (isUp) {
                    $("button[tabindex=" + tabIndex + "]").focus();

                    var offset = $("button[tabindex=" + tabIndex + "]").offset();
                    var h = $("button[tabindex=" + tabIndex + "]").height();
                    var w = $("button[tabindex=" + tabIndex + "]").width();
                } else {
                    $("a[tabindex=" + tabIndex + "]").focus();
                    var offset = $("a[tabindex=" + tabIndex + "]").offset();
                    var h = $("a[tabindex=" + tabIndex + "]").height();
                    var w = $(" a[tabindex=" + tabIndex + "] img").width();
                }
                var frame = {
                    offset: offset,
                    height: h,
                    width: w
                };
                dispatch({
                    type: 'app/changeFrame',
                    payload: {
                        frame: frame
                    },
                });
                return false;
            }
            return true;
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
            slidesToScroll: 1,
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
                                            <a tabIndex={101 + index}>
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
