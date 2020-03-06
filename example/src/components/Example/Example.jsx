import React, { Component } from 'react';
import Animated from 'react-css-animated';

import { animationsIn, animationsOut } from '../../animations';
import Select from '../Select';
import './Example.css'

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: props.isVisible,
      animateOnMount: props.animateOnMount,
      animationIn: props.animationIn,
      animationOut: props.animationOut,
      duration: props.duration,
    };
  }

  handleVisibleChange = (e) => {
    this.setState({ isVisible: e.target.checked });
  };

  handleAnimationInChange = (e) => {
    this.setState({ animationIn: e.target.value });
  };

  handleAnimationOutChange = (e) => {
    this.setState({ animationOut: e.target.value });
  };

  render () {
    const {
      duration,
      isVisible,
      animationIn,
      animationOut,
      animateOnMount,
    } = this.state;

    return (
      <div className='demo'>
        <div className='controls'>
          <div>
            <label className='label'>animationIn</label>
            <Select
              animations={animationsIn}
              selected={animationIn}
              onChange={this.handleAnimationInChange}
            />
          </div>

          <div>
            <label className='label'>animationOut</label>
            <Select
              animations={animationsOut}
              selected={animationOut}
              onChange={this.handleAnimationOutChange}
            />
          </div>

          <div>
            <label className='label'>isVisible</label>
            <input
              type="checkbox"
              checked={isVisible}
              onChange={this.handleVisibleChange}
            />
          </div>

          <div>
            <label className='label'>animateOnMount</label>
            <input
              type="checkbox"
              checked={animateOnMount}
              disabled
            />
          </div>
        </div>

        <div className='example'>
          <Animated
            animationIn={animationIn}
            animationOut={animationOut}
            isVisible={isVisible}
            animateOnMount={animateOnMount}
            duration={duration}
          >
            <h1>Text</h1>
          </Animated>
        </div>
      </div>
    )
  }
}

Example.defaultProps = {
  isVisible: true,
  animateOnMount: false,
  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
  duration: 300,
};
