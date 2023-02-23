import React from 'react'
import './Section.css'

export default function Section({ref,id,classList, children}) {
  return (
    <div ref={ref} id={id} className={classList+" section-base"} >
      {children}
    </div>
  )
}
