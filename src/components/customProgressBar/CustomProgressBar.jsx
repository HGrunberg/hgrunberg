import ProgressBar from '@ramonak/react-progress-bar'
import React, { useEffect, useRef, useState } from 'react'
import CustomP from '../CustomP'
import Reveal from '../Reveal'
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'
import AnimateHeight from 'react-animate-height'


function CustomProgressBar({ children, procent, detail }) {

    const [height, setHeight] = useState('auto')
    const contentDiv = useRef(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            setHeight(contentDiv.current.clientHeight);
        });

        resizeObserver.observe(contentDiv.current);

        return () => resizeObserver.disconnect()
    }, []);

    const clrPrimary = '#d3bb7b'
    const clrLight = '#F2F2F2'
    const clrLighterDark = '#153A36'

    const [showSkillDetail, setShowSkillDetail] = useState(false)

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })


    const mainControls = useAnimation()

    useEffect(() => {
        if (showSkillDetail) {
            mainControls.start("visible")
        } else {
        }
    }, [showSkillDetail])

    const showDetail = () => {
        setShowSkillDetail(true)
    }

    const hideDetail = () => {
        setShowSkillDetail(false)
    }

    return (
        <div className='my-5' onMouseOver={showDetail} onMouseLeave={hideDetail}>
                <Reveal>
                <AnimateHeight
                    height={height}
                    contentClassName="auto-content"
                    contentRef={contentDiv}
                >
                    <CustomP alignment="text-left 2xl:text-lg" className={`${showSkillDetail ? 'text-primary' : 'text-light'} transition-colors duration-500`}>
                        {children}
                    </CustomP>
                    <ProgressBar
                        completed={procent}
                        bgColor={clrPrimary}
                        height='max-content'
                        padding='0.25rem'
                        baseBgColor={clrLighterDark}
                        labelColor={clrLight}
                        animateOnRender={true}
                    />
                    <AnimatePresence >
                        {showSkillDetail && (
                            <>
                                <motion.div
                                    ref={ref}
                                    variants={{
                                        hidden: { opacity: 0, y: -10, color: '#d3bb7b' },
                                        visible: { opacity: 1, y: 0, color: '#F2F2F2' }
                                    }}
                                    initial="hidden"
                                    exit={{ opacity: 0 }}
                                    animate={mainControls}
                                    transition={{ duration: 0.5 }}
                                >
                                    <CustomP alignment='text-left'>
                                        {detail}
                                    </CustomP>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
        </AnimateHeight>
                </Reveal>

            </div>
    )
}

export default CustomProgressBar