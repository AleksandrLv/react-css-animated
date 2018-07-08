import React, { Component } from 'react';
import Animated from 'react-css-animated';

import { animationsIn, animationsOut } from './animations';
import Select from './Select';

export default class App extends Component {
  state = {
    isVisible: true,
    animationIn: 'fadeIn',
    animationOut: 'fadeOut',
  };

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
    const { isVisible, animationIn, animationOut } = this.state;

    return (
      <div className='demo'>
        <div className='controls'>
          <label>Enter animation</label>
          <Select
            animations={animationsIn}
            selected={animationIn}
            onChange={this.handleAnimationInChange}
          />

          <label>Exit animation</label>
          <Select
            animations={animationsOut}
            selected={animationOut}
            onChange={this.handleAnimationOutChange}
          />

          <label>Enter/Exit component</label>
          <input
            type="checkbox"
            onChange={this.handleVisibleChange}
          />
        </div>

        <div className='example'>
          <Animated
            animationIn={animationIn}
            animationOut={animationOut}
            isVisible={isVisible}
          >
            <h1>Text</h1>
          </Animated>
        </div>
      </div>
    )
  }
}
