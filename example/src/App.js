import React from 'react';
import Example from './components/Example';

const App = () => (
  <div>
    <Example animateOnMount animationIn="fadeInDown" duration={1000} />
    <Example isVisible={false} />
    <Example />
  </div>
);

export default App;
