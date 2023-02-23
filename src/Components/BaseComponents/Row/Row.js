import React from 'react'

import './Row.css'

export default function Row({id,classList, children, onClick}) {
  return (
    <div id={id}  className={classList+" row-base"} onClick={onClick} >
        {children}
    </div>
  )
}
