import React, { useState } from 'react'


export default function Stf () {
    const [isHover, setHover] = useState(false)
  return (
    <div>
      <p>{isHover}</p>
      <button onMouseEnter={setHover(true)} onMouseLeave={setHover(false)}>hover</button>
    </div>
  )
}