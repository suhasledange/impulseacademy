import { animated, useSpring } from '@react-spring/web'
import React from 'react'

const AnimateNumber = ({n}) => {

    const {number } = useSpring({
        from:{number:0},
        number:n,
        delay:200,
        config:{mass:1,tension:20,friction:10},
    })

  return (
    <animated.div>
        {number.to((n)=>n.toFixed(0)+"+")}
    </animated.div>
  )
}

export default AnimateNumber
