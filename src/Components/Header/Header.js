import React from 'react'
import './Header.css'

import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'


export default function Header() {
  return (

        <Row classList={'bo  r-x-center section1-header'}>
            <Col classList={'header-sub'}>
                <div className='bo section1-header-text' >
                    <a href='#section-1' >Home</a>
                </div>
            </Col>
            <Col classList={'header-sub'}>
                <div className='bo section1-header-text' >
                    <a href='#section-2' >About Me</a>
                </div>
            </Col>
            <Col classList={'header-sub'}>
                <div className='bo section1-header-text' >
                    <a href='#section-6' >Contact Me</a>
                </div>
            </Col>
        </Row>


  )
}
