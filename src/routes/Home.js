/**
 * Created by echo on 2017/1/3.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

import Slider from 'react-slick';

import styles from './Home.less';

let selectedItem = 0;

class Home extends React.Component {

    componentWillMount() {

        $(document).ready(()=> {
            $(document).keydown((e)=> {
                switch (e.which) {
                    case 13:
                        console.log("点击了" + selectedItem);
                        break;
                    case 37: {
                        console.log("左");
                        if (selectedItem == 0) return;

                        if (selectedItem == 3) { //可以左滚
                            this.previous();
                        }
                        selectedItem --;
                        this.setState({
                            selected: selectedItem
                        });
                        break;
                    }
                    case 39:
                        console.log("右");
                        if (selectedItem == 5) return;
                        if (selectedItem == 2) { //可以右滚
                            this.next();
                        }
                        selectedItem ++;
                        this.setState({
                            selected: selectedItem
                        });
                        break;
                }
            });
        });
    }

    next = ()=> {
        console.log("next");
        this.slider.slickNext()
    };

    previous = ()=> {
        console.log("previous");
        this.slider.slickPrev()
    };

    state = ({
        divs:[
            {title: "直播", color: "#F465FF", img:"src/img/0.jpg"},
            {title: "回看／点播／VR", color: "#FFFF23", img:"src/img/1.jpg"},
            {title: "视频通信", color: "#34FFFF", img:"src/img/2.jpg"},
            {title: "消息中心", color: "#FF56FF", img:"src/img/3.jpg"},
            {title: "娱乐游戏", color: "#FF7768", img:"src/img/4.jpg"},
            {title: "系统服务", color: "#F2FF6F", img:"src/img/5.jpg"} ],
        selected: 0
    });

    //----------------render--------------------

    render() {
        const settings = {
            infinite: false,
            speed: 500,
            arrows: false,
            slidesToScroll: 3,
            slidesToShow: 3,
        };
        return (
                <div className={`row ${styles.container_div}`}>
                    {/* 左边的视频图片部分 */}
                    <img className={`${styles.video_img} col-md-4 img-rounded`}
                         src="src/img/v.jpg" />

                    {/* 右边的滚动部分 */}
                    <div className={`col-md-8 ${styles.slider_div}`}>
                        <Slider ref={c => this.slider = c } {...settings}>
                            {this.state.divs.map((obj, index) => {
                                return(
                                        <div key={index}>
                                            <img className={`${this.state.selected == index ? styles.selected_img : styles.unSelected_img} img-rounded`}
                                            src={obj.img}/>
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
