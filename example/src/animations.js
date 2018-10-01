const animationsIn = [
  {
    group: 'fading',
    animations: [
      'fadeIn',
      'fadeInDown',
      'fadeInDownSmall',
      'fadeInDownBig',
      'fadeInLeft',
      'fadeInLeftSmall',
      'fadeInLeftBig',
      'fadeInRight',
      'fadeInRightSmall',
      'fadeInRightBig',
      'fadeInUp',
      'fadeInUpSmall',
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
      'fadeOutDownSmall',
      'fadeOutDownBig',
      'fadeOutLeft',
      'fadeOutLeftSmall',
      'fadeOutLeftBig',
      'fadeOutRight',
      'fadeOutRightSmall',
      'fadeOutRightBig',
      'fadeOutUp',
      'fadeOutUpSmall',
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
