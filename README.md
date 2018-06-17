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

## License

MIT © [Alexander Lyalikhov](https://github.com/AleksandrLv)
