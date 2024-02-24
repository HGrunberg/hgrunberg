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
            <div className=" my-10 mx-auto text-light">
                <Reveal>
                    <div className='w-max'>
                        <CVItem
                            className={"italic"}
                            title={t('testimonialsSection.netto.title')}
                            info={t('testimonialsSection.netto.testimonial')}
                        />
                    </div>
                </Reveal>


            </div>
        </>
    )
}

export default AllTestimonials