import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { timeShape, easingShape } from './propTypes';
import styles from './styles.css';

class Animated extends PureComponent {
  constructor(props) {
    super(props);
    this.state = props.animateOnMount ? (
      this.getAnimatedState(props)
    ) : {};
  }

  componentWillReceiveProps(nextProps) {
    const { isVisible } = nextProps;

    if (isVisible !== this.props.isVisible) {
      this.setState(this.getAnimatedState(nextProps));
    }
  }

  getAnimatedState = (props) => {
    const {
      isVisible,
      animationIn,
      animationOut,
      duration,
      easing,
      delay,
    } = props;

    const type = isVisible ? 'in' : 'out';

    return {
      animation: isVisible ? animationIn : animationOut,
      delay: delay instanceof Object ? delay[type] : delay,
      easing: easing instanceof Object ? easing[type] : easing,
      duration: duration instanceof Object ? duration[type] : duration,
    };
  };

  render() {
    const {
      style,
      className,
      children,
      innerRef,
      isVisible,
    } = this.props;

    const {
      delay,
      easing,
      duration,
      animation,
    } = this.state;

    style.opacity = animation ? null : Number(isVisible);

    return (
      <div
        className={classnames(className, styles.animated, styles[animation])}
        ref={innerRef}
        style={{
          animationDelay: `${delay}ms`,
          animationTimingFunction: easing,
          animationDuration: `${duration}ms`,
          pointerEvents: isVisible ? 'all' : 'none',
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
}

/* eslint-disable react/no-unused-prop-types */
Animated.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  style: PropTypes.object,
  isVisible: PropTypes.bool,
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  delay: timeShape,
  duration: timeShape,
  easing: easingShape,
  animateOnMount: PropTypes.bool,
  children: PropTypes.any,
};
/* eslint-enable */

Animated.defaultProps = {
  style: {},
  isVisible: true,
  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
  delay: 0,
  duration: 300,
  easing: 'ease',
  animateOnMount: false,
};

export default Animated;
