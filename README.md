# react-css-animated

> React css animation based on animate.css

[![NPM](https://img.shields.io/npm/v/react-css-animated.svg)](https://www.npmjs.com/package/react-css-animated) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-css-animated
```

## Usage

```jsx
import React, { Component } from 'react';

import Animated from 'react-css-animated';

class Title extends Component {
  render () {
    return (
      <Animated animateOnMount>
        <h1>Animate</h1>
      </Animated>
    );
  }
}
```

## propTypes
```jsx
Animated.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  tag: PropTypes.string,
  style: PropTypes.object,
  isVisible: PropTypes.bool,
  /* you can use your own animations */
  animations: PropTypes.object,
  /* eslint-disable react/no-unused-prop-types */
  /* These props are used in an external function getAnimatedState */
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  delay: timeShape,
  duration: timeShape,
  easing: easingShape,
  /* eslint-enable */
  animateOnMount: PropTypes.bool,
  children: PropTypes.node,
  /*
    renderContent description:
    Elements always come new, so there is a reason to rerender.
    To avoid rerender use the function renderContent instead children.
  */
  renderContent: PropTypes.func,
  data: PropTypes.any,
  onClick: PropTypes.func,
};

Animated.defaultProps = {
  tag: 'div',
  style: {},
  animations: {},
  isVisible: true,
  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
  delay: 0,
  duration: 300,
  easing: 'ease',
  animateOnMount: false,
};

const timeShape = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    in: PropTypes.number,
    out: PropTypes.number,
  }).isRequired,
]);

const easingShape = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    in: PropTypes.string,
    out: PropTypes.string,
  }).isRequired,
]);
```


## License

MIT © [Alexander Lyalikhov](https://github.com/AleksandrLv)
