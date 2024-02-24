import React from 'react'
import { useTranslation } from 'react-i18next'
import CustomH2 from '../components/CustomH2'
import CustomH3 from '../components/CustomH3'
import CustomP from '../components/CustomP'
import SkillsIconContainer from '../components/SkillsIconContainer'
import Reveal from '../components/Reveal'


function AboutMe() {

    const { t } = useTranslation()


    return (
        <div className=" xl:h-screen-75 rounded-2xl my-10 mx-auto w-4/5 text-light bg-lighterDark p-4 shadow-lg shadow-primary lg:grid grid-cols-2 lg:items-center">
            <Reveal>
                <img className=" w-8/12 object-cover my-4 mx-auto shadow-md shadow-primary" src="/about-me-img.jpg" alt="Image of Planio" />
            </Reveal>
            <div className='flex flex-col gap-6'>
                <div>
                    <Reveal>
                        <CustomH2 className='2xl:text-4xl'>{t('aboutMeSection.title')}</CustomH2>
                        <CustomH3 className=' 2xl:text-xl'>{t('aboutMeSection.sub-title')}</CustomH3>
                    </Reveal>
                </div>
                <Reveal>
                    <CustomP className='2xl:text-lg'>{t('aboutMeSection.info')}</CustomP>
                </Reveal>
                <Reveal>
                    <SkillsIconContainer />
                </Reveal>
            </div>

        </div>
    )
}

export default AboutMe	