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
        <div className="lg:py-20 px-12 rounded-2xl gap-4 my-10 mx-auto w-4/5 max-w-7xl text-light bg-lighterDark p-4 shadow-lg shadow-primary lg:grid grid-cols-2 lg:items-center">
            <Reveal>
                <img className="object-cover my-4 mx-auto shadow-md shadow-primary" src="/about-me-img.jpg" alt="Image of Planio" />
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