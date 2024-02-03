import React from 'react'

import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Designer |',
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        'UI Designer |',
        3000,
        'Project Manager',
     
        3000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default ExampleComponent