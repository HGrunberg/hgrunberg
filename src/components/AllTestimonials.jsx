import React from 'react'
import CustomP from './CustomP'
import { useTranslation } from 'react-i18next'
import CustomH2 from './CustomH2'
import Reveal from './Reveal'
import CustomH3 from './CustomH3'
import CVItem from './CVItem'

function AllTestimonials() {

    const { t } = useTranslation()

    return (
        <>
            <section>
                <div className="mt-10 lg:py-20 mx-auto mb-40 w-4/5 max-w-7xl  text-light">
                    <div className="grid items-center gap-8 xl:grid-cols-5">
                        <div className="space-y-4 text-center xl:col-span-2 xl:text-left">
                            <CustomH2 className='2xl:text-4xl '>{t('testimonialsSection.title')}</CustomH2>
                            <CustomP alignment={"xl:text-left"} className=' max-w-lg mx-auto 2xl:text-lg' weight="font-light" >{t('testimonialsSection.description')}</CustomP>
                        </div>
                        <div className="xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <Reveal>
                                        <div className="p-6 rounded-2xl shadow-lg shadow-primary">
                                            <p className='2xl:text-lg'>{t('testimonialsSection.lykke.testimonial-1')}</p>
                                            <br />
                                            <p className='2xl:text-lg'>{t('testimonialsSection.lykke.testimonial-2')}</p>
                                            <p className="text-lg mt-4 font-medium text-primary">{t('testimonialsSection.lykke.title')}</p>
                                        </div>
                                    </Reveal>
                                    <Reveal>
                                        <div className="p-6 rounded-2xl shadow-lg shadow-primary">
                                            <p className='2xl:text-lg'>{t('testimonialsSection.christoffer.testimonial-1')}</p>
                                            <br />
                                            <p className='2xl:text-lg'>{t('testimonialsSection.christoffer.testimonial-2')}</p>
                                            <p className="text-lg mt-4 font-medium text-primary">{t('testimonialsSection.christoffer.title')}</p>
                                        </div>
                                    </Reveal>
                                </div>
                                <div className="grid content-center gap-4">
                                    <Reveal>
                                        <div className="p-6 rounded-2xl shadow-lg bg-primary text-dark">
                                            <p className='2xl:text-lg'>{t('testimonialsSection.feedback.testimonial-1')}</p>
                                            <br />
                                            <p className='2xl:text-lg'>{t('testimonialsSection.feedback.testimonial-2')}</p>
                                            <p className="text-lg mt-4 font-medium text-dark">{t('testimonialsSection.feedback.title')}</p>
                                        </div>
                                    </Reveal>
                                    <Reveal>
                                        <div className="p-6 rounded-2xl shadow-lg shadow-primary">
                                            <p className='2xl:text-lg'>{t('testimonialsSection.netto.testimonial-1')}</p>
                                            <br />
                                            <p className='2xl:text-lg'>{t('testimonialsSection.netto.testimonial-2')}</p>
                                            <p className="text-lg mt-4 font-medium text-primary">{t('testimonialsSection.netto.title')}</p>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllTestimonials
