/**
 * Created by echo on 2017/1/22.
 */
import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion'
import styles from './SFrame.less';

class SFrame extends Component {

// <div className={styles.frame_div} style={{
//     width: `${frame.width}`,
//     height: `${frame.height}`,
//     offset: `${frame.offset}`
// }}>

    render() {
        const { frame } = this.props;
        return (
                <Motion style={{x: spring(frame.offset.left), y: spring(frame.offset.top)}}>
                    {({x, y}) =>
                            // children is a callback which should accept the current value of
                            // `style`
                            <div className={styles.frame_div} style={{
                                WebkitTransform: `translate(${x}px, ${y-120}px)`,
                                transform: `translate(${x}px, ${y-120}px)`,
                                width: frame.width,
                                height: frame.height,
                            }} />
                    }
                </Motion>
        );
    }

}

SFrame.propTypes = {
    frame: PropTypes.object.isRequired
};

export default SFrame;

