import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import animateCSS from 'animate.css';

import { timeShape, easingShape } from './propTypes';
import animations from './animations/index.scss';

const getAnimatedState = (props) => {
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
    isVisible,
    animation: isVisible ? animationIn : animationOut,
    delay: delay[type] === 0 || delay[type] ? delay[type] : delay,
    easing: easing[type] ? easing[type] : easing,
    duration: duration[type] === 0 || duration[type] ? duration[type] : duration,
  };
};

class Animated extends PureComponent {
  constructor(props) {
    super(props);
    this.styles = { ...animateCSS, ...animations, ...props.animations };
    this.state = props.animateOnMount ? (
      getAnimatedState(props)
    ) : ({
      isVisible: props.isVisible,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { isVisible } = nextProps;

    if (prevState.isVisible === undefined) return null;

    if (isVisible !== prevState.isVisible) {
      return getAnimatedState(nextProps);
    }

    return null;
  }

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
      renderContent,
    } = this.props;

    const {
      delay,
      easing,
      duration,
      animation,
      isVisible,
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
        {renderContent ? renderContent() : children}
      </Tag>
    );
  }
}

Animated.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  tag: PropTypes.string,
  style: PropTypes.object,
  isVisible: PropTypes.bool,
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

export default Animated;
