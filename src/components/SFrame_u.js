/**
 * Created by echo on 2017/1/22.
 */
import React, { Component, PropTypes } from 'react';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion'
import styles from './SFrame.less';

class Alert extends Component {
    static defaultPops = {
        type: ''
    };

    render() {
        const { type, text } = this.props;
        return (
                <Transition
                        component={false}
                        measure={false}
                        enter={{
                            opacity: 1,
                            translateY: 0
                        }}
                        leave={{
                            opacity: 1,
                            translateY: 80
                        }}
                >
                    {
                        text !== '' &&
                        <div key="alert" className={"alert" + (type && ` alert--${type}`)}>
                            {text}
                        </div>
                    }
                </Transition>
        )
    }
}


class SFrame extends Component {

    state = {
        alert: ''
    };

    render() {
        const { alert } = this.state;
        return (
                <div>
                    <button
                            onClick={() => this.setState({ alert: alert === '' ? 'Please figure out what is wrong.' : '' })}
                    >
                        Toggle Alert
                    </button>
                    <Alert type="warning" text={alert}/>
                </div>
        )
    }

}

SFrame.propTypes = {
    // number: PropTypes.string.isRequired,
};

export default SFrame;

