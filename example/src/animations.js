const animationsIn = [
  {
    group: 'fading',
    animations: [
      'fadeIn',
      'fadeInDown',
      'fadeInDownBig',
      'fadeInLeft',
      'fadeInLeftBig',
      'fadeInRight',
      'fadeInRightBig',
      'fadeInUp',
      'fadeInUpBig',
    ],
  },
  {
    group: 'sliding',
    animations: [
      'slideInDown',
      'slideInLeft',
      'slideInRight',
      'slideInUp',
    ],
  },
];

const animationsOut = [
  {
    group: 'fading',
    animations: [
      'fadeOut',
      'fadeOutDown',
      'fadeOutDownBig',
      'fadeOutLeft',
      'fadeOutLeftBig',
      'fadeOutRight',
      'fadeOutRightBig',
      'fadeOutUp',
      'fadeOutUpBig',
    ]
  },
  {
    group: 'sliding',
    animations: [
      'slideOutDown',
      'slideOutLeft',
      'slideOutRight',
      'slideOutUp',
    ],
  },
];

export { animationsIn, animationsOut };
