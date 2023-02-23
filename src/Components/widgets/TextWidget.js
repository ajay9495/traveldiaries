import React from 'react'
import './TextWidget.css'

import TextWidgetLogic from './TextWidgetLogic'
import { motion,AnimatePresence } from 'framer-motion'

export default function TextWidget({data}) {

    const {animationVariant} = TextWidgetLogic();



  return (
            <>
                <AnimatePresence >

                    <motion.div 
                        variants={animationVariant}
                        animate='animate'
                        initial='initial'
                        exit='exit'
                        className="bo p-5 text-widget-wrapper"
                    >

                        <div className="bo  text-widget-upper">
                            <div className="bo top-box">
                                <div className="top-box-line"></div>
                                <div className="px-3 top-box-text">{data.subtitle}</div>
                            </div>
                            <div className='bo text-widget-title'>{data.title}</div>
                            <div className='bo text-widget-description'>{data.description}</div>
                        </div>
                        <div className="bo  text-widget-lower">
                            {data.number}
                        </div>

                    </motion.div> 

                </AnimatePresence>
            </>


  )
}
