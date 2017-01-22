/**
 * Created by echo on 2017/1/22.
 */
import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion'
import styles from './SFrame.less';


class SFrame extends Component {
    state = {
        open: false
    };

    handleMouseDown = () => {
        this.setState({open: !this.state.open});
    };

    handleTouchStart = (e) => {
        e.preventDefault();
        this.handleMouseDown();
    };

    render() {
        return (
                <div>
                    <button
                            onMouseDown={this.handleMouseDown}
                            onTouchStart={this.handleTouchStart}>
                        Toggle
                    </button>

                    <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
                        {({x}) =>
                                // children is a callback which should accept the current value of
                                // `style`
                                <div className={styles.demo0}>
                                    <div className={styles.demo0_block} style={{
                                        WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                        transform: `translate3d(${x}px, 0, 0)`,
                                    }} />
                                </div>
                        }
                    </Motion>
                </div>
        );
    }

}

SFrame.propTypes = {
    // number: PropTypes.string.isRequired,
};

export default SFrame;

