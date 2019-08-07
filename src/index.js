import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import animateCSS from 'animate.css';

import { timeShape, easingShape } from './propTypes';
import animations from './animations/index.scss';

class Animated extends PureComponent {
  constructor(props) {
    super(props);
    this.styles = { ...animateCSS, ...animations, ...props.animations };
    this.state = props.animateOnMount ? (
      this.getAnimatedState(props)
    ) : {};
  }

  componentDidUpdate({ isVisible: isVisiblePrev }) {
    const { isVisible } = this.props;

    if (isVisible !== isVisiblePrev) {
      this.setState(this.getAnimatedState(this.props));
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
      delay: delay[type] === 0 || delay[type] ? delay[type] : delay,
      easing: easing[type] ? easing[type] : easing,
      duration: duration[type] === 0 || duration[type] ? duration[type] : duration,
    };
  };

  handleClick = () => {
    const { data, onClick } = this.props;

    if (onClick) onClick(data);
  };

  render() {
    const {
      tag,
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

    const Tag = tag;

    style.opacity = animation ? null : Number(isVisible);

    return (
      <Tag
        className={classnames(className, this.styles.animated, this.styles[animation])}
        ref={innerRef}
        style={{
          animationDelay: `${delay}ms`,
          animationTimingFunction: easing,
          animationDuration: `${duration}ms`,
          pointerEvents: isVisible ? 'all' : 'none',
          ...style,
        }}
        onClick={this.handleClick}
      >
        {children}
      </Tag>
    );
  }
}

/* eslint-disable react/no-unused-prop-types */
Animated.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  tag: PropTypes.string,
  style: PropTypes.object,
  isVisible: PropTypes.bool,
  animations: PropTypes.object,
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  delay: timeShape,
  duration: timeShape,
  easing: easingShape,
  animateOnMount: PropTypes.bool,
  children: PropTypes.any,
  data: PropTypes.any,
  onClick: PropTypes.func,
};
/* eslint-enable */

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

export default Animated;
