import ProgressBar from '@ramonak/react-progress-bar'
import React, { useState } from 'react'
import CustomP from '../CustomP'

function CustomProgressBar({ children, procent, detail }) {

    const clrPrimary = '#3BAB87'
    const clrLight = '#F2F2F2'
    const clrLighterDark = '#30373E'

    const [showSkillDetail, setShowSkillDetail] = useState(false)

    const showDetail = () => {
        setShowSkillDetail(true)
    }

    const hideDetail = () => {
        setShowSkillDetail(false)
    }

    return (
        <div className=' my-5' onMouseOver={showDetail} onMouseLeave={hideDetail}>
            <CustomP alignment="text-left 2xl:text-lg">
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
            {showSkillDetail && (
                <CustomP alignment='text-left'>
                    {detail}
                </CustomP>
            )}
        </div>
    )
}

export default CustomProgressBar