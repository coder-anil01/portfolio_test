import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I Am Full stack Devloper',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'I Am Mearn Stack Devloper',
        1000,
        'I Am RestFull Api Devloper',
        1000,
        'I Am Frontend Devloper',
        1000
      ]}
      wrapper="span"
      speed={30}
      repeat={Infinity}
    />
  )
}

export default Typing
