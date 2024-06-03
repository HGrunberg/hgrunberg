import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CustomBtn from '../components/btn/CustomBtn'
import CustomP from '../components/CustomP'
import { Button } from '@mui/material'
import { display } from '@mui/system'
import { Link } from 'react-scroll'
import Reveal from '../components/Reveal'
import RevealFade from '../components/RevealFade'


function HeroSection() {

    const { t } = useTranslation()


    return (
        <>
            <RevealFade>
                <div className=" my-10 mx-auto w-4/5 max-w-7xl text-light">
                    <div className='md:hidden'>
                        <p className="text-center text-xs font-Quicksand text-dark font-thin mb-1">{t('heroSection.intro-text')}</p>
                        <h1 className=" text-center text-4xl font-Quicksand font-bold text-primary mb-2">{t('heroSection.title')} {`:}`}</h1>
                    </div>
                    <div className=" grid md:grid-cols-2 md:items-center">
                        <div>
                            <div className='hidden md:block'>
                                <p className="text-center text-xs 2xl:text-lg font-Quicksand font-thin mb-1">{t('heroSection.intro-text')}</p>
                                <h1 className=" text-center text-4xl 2xl:text-5xl font-Quicksand font-bold text-primary mb-2">{t('heroSection.title')} {`:}`}</h1>
                            </div>
                            <div className='mt-8'>
                                <CustomP className='2xl:text-xl'>{t('heroSection.intro-text-explainer')}</CustomP>
                                <div className='flex flex-col flex-wrap items-center gap-4 my-4 '>
                                    {/* <Button variant="contained" size='large' sx={{
                                        padding: '0',
                                        ':hover': {
                                            bgcolor: 'primary.lighterDark', // theme.palette.primary.main
                                            color: 'primary.main',
                                        },
                                    }}
                                    >
                                        <Link className=' py-2 px-8' to="WhyMeId" spy={true} smooth={true} offset={-100} duration={500}>{t('heroSection.whyMeButton')}</Link>
                                    </Button>


                                    <Button variant="outlined" size='small' sx={{
                                        padding: '0',
                                        ':hover': {
                                            bgcolor: 'primary.lighterDark', // theme.palette.primary.main
                                            color: 'primary.main',
                                        },
                                    }}
                                    >
                                        <Link className=' py-2 px-8' to="ContactMeId" spy={true} smooth={true} offset={-100} duration={500}>{t('heroSection.contactButton')}</Link>
                                    </Button> */}

                                </div>
                            </div>
                        </div>

                        <div className="mb-5 w-6/12 mx-auto md:mr-0 md:ml-auto order-first md:order-none">
                            <CustomP className='hidden md:block'>{t('heroSection.planioExplainer')}</CustomP>
                            <video className="object-cover mx-auto shadow-md shadow-primary" src="planio-hero-video.mp4" type="video/mp4" autoPlay loop muted />
                        </div>
                    </div>
                </div>
            </RevealFade>

        </>
    )
}

export default HeroSection