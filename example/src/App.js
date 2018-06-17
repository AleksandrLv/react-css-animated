import React, { Component } from 'react';

import Animated from 'react-css-animated';

export default class App extends Component {
  state = {
    isVisible: true,
  };

  handleVisibleChange = (e) => {
    const isVisible = e.target.checked;

    this.setState({ isVisible });
  };

  render () {
    const { isVisible } = this.state;

    return (
      <div>
        <input
          type="checkbox"
          onChange={this.handleVisibleChange}
        />
        <Animated
          isVisible={isVisible}
        >
          <h1>Text</h1>
        </Animated>
      </div>
    )
  }
}
