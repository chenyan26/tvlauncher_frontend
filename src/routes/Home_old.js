/**
 * Created by echo on 2017/1/3.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

import Slider from 'react-slick';

import styles from './Home.less';

class Home extends React.Component {

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
                console.log(e);

            },
            afterChange: (e)=>{
                console.log(e);

            }
        };
        return (
                <div className={`row ${styles.container_div}`}>
                    <div className={`col-md-4 ${styles.video_div}`}>

                    </div>
                    <div className={`col-md-8 ${styles.slider_div}`}>
                        <Slider {...settings}>
                            <div id= "div_0" style={{ "backgroundColor": '#F465FF'}}><h3>1</h3></div>
                            <div id= "div_1" style={{ "backgroundColor": '#FFFF23'}}><h3>2</h3></div>
                            <div id= "div_2" style={{ "backgroundColor": '#34FFFF'}}><h3>3</h3></div>
                            <div id= "div_3" style={{ "backgroundColor": '#FF56FF'}}><h3>4</h3></div>
                            <div id= "div_4" style={{ "backgroundColor": '#FF7768'}}><h3>5</h3></div>
                            <div id= "div_5" style={{ "backgroundColor": '#F2FF6F'}}><h3>6</h3></div>
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
