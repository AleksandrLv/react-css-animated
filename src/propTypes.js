import PropTypes from 'prop-types';

export const timeShape = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    in: PropTypes.number,
    out: PropTypes.number,
  }).isRequired,
]);

export const easingShape = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    in: PropTypes.string,
    out: PropTypes.string,
  }).isRequired,
]);
