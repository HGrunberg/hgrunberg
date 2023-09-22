import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CustomH2 from '../components/CustomH2'
import CustomProgressBar from '../components/customProgressBar/CustomProgressBar'
import CustomP from '../components/CustomP'
import CustomH3 from '../components/CustomH3'
import { toast } from 'react-toastify'



function WhyMe() {

    const { t } = useTranslation()

    const showToastRef = useRef();

    const [sectionIsVisible, setSectionIsVisible] = useState(false);


    useEffect(() => {
        if (sectionIsVisible) {
            toast.success(`${t('hoverSkills')} ${`:}`}`, {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "dark",
            })
        }
    }, [sectionIsVisible])

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            setSectionIsVisible(entry.isIntersecting)
        });
        observer.observe(showToastRef.current);
    }, [])

    return (
        <div id='WhyMeId' className=" my-10 mx-auto w-4/5 text-light">
            <CustomH2 className='2xl:text-4xl'>{t('whyMeSection.title')}</CustomH2>
            <CustomP className=' max-w-lg mx-auto 2xl:text-lg' weight="font-light" >{t('whyMeSection.info')} {`:}`}</CustomP>
            <div className='xl:grid xl:grid-cols-2 xl:gap-5'>
                <CustomProgressBar procent={100} detail={t('whyMeSection.motivatedDetail')}>{t('whyMeSection.motivated')}</CustomProgressBar>
                <CustomProgressBar procent={90} detail={t('whyMeSection.digitalMindsetDetail')}>{t('whyMeSection.digitalMindset')}</CustomProgressBar>
                <CustomProgressBar procent={80} detail={t('whyMeSection.goalOrientedDetail')}>{t('whyMeSection.goalOriented')}</CustomProgressBar>
                <CustomProgressBar procent={90} detail={t('whyMeSection.driveDetail')}>{t('whyMeSection.drive')}</CustomProgressBar>
                <div ref={showToastRef}>
                    <CustomProgressBar procent={90} detail={t('whyMeSection.lovedByColleaguesDetail')}>{t('whyMeSection.lovedByColleagues')}</CustomProgressBar>
                </div>
                <CustomProgressBar procent={100} detail={t('whyMeSection.smilingDetail')}>{t('whyMeSection.smiling')}</CustomProgressBar>
                <CustomProgressBar procent={90} detail={t('whyMeSection.bigPotentialDetail')}>{t('whyMeSection.bigPotential')}</CustomProgressBar>
                <CustomProgressBar procent={85} detail={t('whyMeSection.goodCollaborationSkilsDetail')}>{t('whyMeSection.goodCollaborationSkils')}</CustomProgressBar>
                <CustomProgressBar procent={85} detail={t('whyMeSection.independentDetail')}>{t('whyMeSection.independent')}</CustomProgressBar>
                <CustomProgressBar procent={95} detail={t('whyMeSection.responsibleAndQualityConsciousDetail')}>{t('whyMeSection.responsibleAndQualityConscious')}</CustomProgressBar>
                <CustomProgressBar procent={75} detail={t('whyMeSection.takePartInSocialActiviesDetail')}>{t('whyMeSection.takePartInSocialActivies')}</CustomProgressBar>
                <CustomProgressBar procent={80} detail={t('whyMeSection.quickLearnerDetail')}>{t('whyMeSection.quickLearner')}</CustomProgressBar>
                <CustomProgressBar procent={100} detail={t('whyMeSection.lovePraiseAndCriticismDetail')}>{t('whyMeSection.lovePraiseAndCriticism')}</CustomProgressBar>
                <CustomProgressBar procent={60} detail={t('whyMeSection.loveRoutinesDetail')}>{t('whyMeSection.loveRoutines')}</CustomProgressBar>
            </div>
        </div>
    )
}

export default WhyMe