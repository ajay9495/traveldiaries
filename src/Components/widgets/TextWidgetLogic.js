
export default function TextWidgetLogic(){

    var animationVariant = {
        initial: {
            opacity:0
        },
        animate:{
          opacity:1,
          transition:{
            type:'ease-in',
            duration: 1,
            delay: 0.3
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
