import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'



function RevealFade({ children }) {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <motion.div
        ref={ref}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1}}
        >
            {children}
        </motion.div>
    )
}

export default RevealFade