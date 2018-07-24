import React, { Component } from 'react';
import Animated from 'react-css-animated';

import { animationsIn, animationsOut } from './animations';
import animations from './animations.css';
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
          <div>
            <label>Enter animation</label>
            <Select
              animations={animationsIn}
              selected={animationIn}
              onChange={this.handleAnimationInChange}
            />
          </div>

          <div>
            <label>Exit animation</label>
            <Select
              animations={animationsOut}
              selected={animationOut}
              onChange={this.handleAnimationOutChange}
            />
          </div>

          <div>
            <label>Enter/Exit component</label>
            <input
              type="checkbox"
              onChange={this.handleVisibleChange}
            />
          </div>
        </div>

        <div className='example'>
          <Animated
            animations={animations}
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
