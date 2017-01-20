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
                    case 13: {
                        console.log("点击了" + selectedItem);
                        console.log(this.state.divs[selectedItem].url);
                    }
                        break;
                    case 37: {
                        console.log("左");
                        if (selectedItem == 0) return;

                        if (selectedItem == 3) { //可以左滚
                            this.previous();
                        }
                        selectedItem--;
                        this.setState({
                            selected: selectedItem
                        });
                    }
                        break;
                    case 39: {
                        console.log("右");
                        if (selectedItem == 5) return;
                        if (selectedItem == 2) { //可以右滚
                            this.next();
                        }
                        selectedItem++;
                        this.setState({
                            selected: selectedItem
                        });
                    }
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
            {title: "直播", img: "src/img/v.jpg", url: "zhibo"},
            {title: "直播", img: "src/img/0.jpg", url: "zhibo"},
            {title: "回看／点播／VR", img: "src/img/1.jpg", url: "huikan"},
            {title: "视频通信", img: "src/img/2.jpg", url: "shiping"},
            {title: "消息中心", img: "src/img/3.jpg", url: "xiaoxi"},
            {title: "娱乐游戏", img: "src/img/4.jpg", url: "yule"},
            {title: "系统服务", img: "src/img/5.jpg", url: "xitong"} ],
        selected: 0
    });

    //----------------render--------------------

    render() {
        const settings = {
            infinite: false,
            speed: 2000,
            arrows: false,
            slidesToScroll: 1,
            slidesToShow: 4,
        };
        return (
                <div className={styles.container_div}>
                    <div className={styles.slider_div}>
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
