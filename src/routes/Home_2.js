/**
 * Created by echo on 2017/1/3.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

import Slider from 'react-slick';

import styles from './Home.less';

let selectedItem = 0;

$(document).keypress(function(e)
{
    console.log(e);
    switch (e.which) {
        case 13:
            console.log("点击了" + selectedItem);
            break;

    }
});

class Home extends React.Component {

    componentWillMount() {
        // $("#div_1").blur();
        $("#div_1").focus();
    }

    state = ({
        divs:[
            {title: "直播", color: "#F465FF"},
            {title: "回看／点播／VR", color: "#FFFF23"},
            {title: "视频通信", color: "#34FFFF"},
            {title: "消息中心", color: "#FF56FF"},
            {title: "娱乐游戏", color: "#FF7768"},
            {title: "系统服务", color: "#F2FF6F"} ],
        selected: 0
    });

    //----------------render--------------------

    render() {
        const settings = {
            focusOnSelect: true,
            // infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            beforeChange: (e)=>{
                // 变为 未选中状态
            },
            afterChange: (e)=>{
                console.log(e);
                selectedItem = e;
                // 变为 选中状态
                this.setState({
                    selected: e
                })
            }
        };
        return (
                <div className={`row ${styles.container_div}`}>
                    <div className={`col-md-4 ${styles.video_div}`}>

                    </div>
                    <div className={`col-md-8 ${styles.slider_div}`}>
                        <Slider {...settings}>
                            {this.state.divs.map((obj, index) => {
                                return(<div key={index}
                                            className={`${this.state.selected == index ? styles.selected_div : styles.unSelected_div}`}
                                            id={"div_" + index}
                                            style={{ "backgroundColor": obj.color}}>{obj.title}</div>);
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
