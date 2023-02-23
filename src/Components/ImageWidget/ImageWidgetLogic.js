import { delay } from "framer-motion"

export default function ImageWidgetLogic(){

    var animationVariant = {
        initial: {
            opacity:0,
            scale:0.5
        },
        animate:{
          opacity:1,
          scale:1,
          transition:{
            type:'ease-in',
            duration: 0.3
          }
        },
        exit:{
            opacity:0,
            transition:{
              type:'ease-out'
            }
        }
    }

    return {
        animationVariant
    }


}