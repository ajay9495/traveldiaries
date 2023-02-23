import React from 'react'
import ImageWidgetLogic from './ImageWidgetLogic';
import { motion,AnimatePresence } from 'framer-motion'


export default function ImageWidget({image}) {

    const {animationVariant} = ImageWidgetLogic();

  return (

    <>
        <AnimatePresence >
            <motion.div 
                variants={animationVariant}
                animate='animate'
                initial='initial'
                exit='exit'
                className='bo w-s-8  w-l-6  pull-right section2-image-div'
            >
              <img className='travel-image' src={image} />
            </motion.div>
        </AnimatePresence>
    </>

    
  )
}
