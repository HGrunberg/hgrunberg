import React from 'react'
import { useTranslation } from 'react-i18next';
import CustomH2 from "../components/CustomH2";
import CustomH3 from "../components/CustomH3";
import { Link } from 'react-router-dom';
import { MuiContactForm } from '../sections/MuiContactForm';
import CustomP from '../components/CustomP';
import { Button, List, ListItem } from '@mui/material';
import CVItem from '../components/CVItem';


function CVPage() {

  const { t } = useTranslation()

  return (
    <>


      <div className='text-light text-center'>


        <div className='text-light w-10/12 mx-auto'>
          <h1 className=" text-center text-4xl mt-10 font-Comfortaa font-bold text-primary mb-2">{t('CVPage.title')} {`:}`}</h1>

          <CustomP className="my-6 w-full lg:w-9/12 mx-auto">{t('CVPage.aboutMe')}</CustomP>

          <div className='flex flex-col flex-wrap items-center gap-4 my-4 '>
            <Button variant="contained" size='large' sx={{
              padding: '0',
              ':hover': {
                bgcolor: 'primary.lighterDark', // theme.palette.primary.main
                color: 'primary.main',
              },
            }}
            >
              <Link className=' py-2 px-8 items-start' to="/SebastianHG-CV-DA.pdf" target="_blank" download>{t('CVPage.downloadDACV')}</Link>
            </Button>


            <Button variant="outlined" size='small' sx={{
              padding: '0',
              ':hover': {
                bgcolor: 'primary.lighterDark', // theme.palette.primary.main
                color: 'primary.main',
              },
            }}
            >
              <Link className=' py-2 px-8 items-start' to="/SebastianHG-CV-EN.pdf" target="_blank" download>{t('CVPage.downloadENCV')}</Link>
            </Button>
          </div>

          <div className=' mt-16'>
            <div className='grid gap-6'>
              <div className='grid gap-3'>
                <CustomH2 className="md:text-left">{t('CVPage.educationTitle')}</CustomH2>
                <CVItem
                  title={t('CVPage.education.multimediadesign')}
                  year={t('CVPage.education.multimediadesignYear')}
                  info={t('CVPage.education.multimediadesignInfo')}
                  mySkills={[
                    t('CVPage.education.multimediadesignSkills.react'),
                    t('CVPage.education.multimediadesignSkills.API'),
                    t('CVPage.education.multimediadesignSkills.some'),
                    t('CVPage.education.multimediadesignSkills.tdc'),
                    t('CVPage.education.multimediadesignSkills.uxCopyWriting'),
                    t('CVPage.education.multimediadesignSkills.userTests'),
                    t('CVPage.education.multimediadesignSkills.userNeeds'),
                    t('CVPage.education.multimediadesignSkills.userGoals'),
                    t('CVPage.education.multimediadesignSkills.businessGoals'),
                    t('CVPage.education.multimediadesignSkills.designRules'),
                    t('CVPage.education.multimediadesignSkills.projectManagement'),
                  ]}
                />
                <CVItem
                  title={t('CVPage.education.stx')}
                  year={t('CVPage.education.stxYear')}
                  info={t('CVPage.education.stxInfo')}
                />
                <CVItem
                  title={t('CVPage.education.10th')}
                  year={t('CVPage.education.10thYear')}
                  info={t('CVPage.education.10thInfo')}
                />
              </div>
              <div className='grid gap-3'>
                <CustomH2 className="md:text-left">{t('CVPage.workExperinceTitle')}</CustomH2>
                <CVItem
                  title={t('CVPage.workExperince.annes')}
                  year={t('CVPage.workExperince.annesYear')}
                  info={t('CVPage.workExperince.annesInfo')}
                />
                <CVItem
                  title={t('CVPage.workExperince.nettoNewest')}
                  year={t('CVPage.workExperince.nettoNewestYear')}
                  info={t('CVPage.workExperince.nettoNewestInfo')}
                />
                <CVItem
                  title={t('CVPage.workExperince.nettoMiddle')}
                  year={t('CVPage.workExperince.nettoMiddleYear')}
                  info={t('CVPage.workExperince.nettoMiddleInfo')}
                />
                <CVItem
                  title={t('CVPage.workExperince.nettoOld')}
                  year={t('CVPage.workExperince.nettoOldYear')}
                  info={t('CVPage.workExperince.nettoOldInfo')}
                />
              </div>
              <div className='grid gap-3'>
                <CustomH2 className="md:text-left">{t('CVPage.ITExperienceTitle')}</CustomH2>
                <CVItem
                  title={t('CVPage.ITExperience.expoReactNative')}
                  user={t('CVPage.ITExperience.expoReactNativeUser')}
                  info={t('CVPage.ITExperience.expoReactNativeInfo')}
                  mySkills={[
                    t('CVPage.ITExperience.expoReactNativeSkills.userDesign'),
                    t('CVPage.ITExperience.expoReactNativeSkills.userTests'),
                    t('CVPage.ITExperience.expoReactNativeSkills.firebase'),
                    t('CVPage.ITExperience.expoReactNativeSkills.asyncStorage'),
                    t('CVPage.ITExperience.expoReactNativeSkills.redux'),
                    t('CVPage.ITExperience.expoReactNativeSkills.multiLng'),
                    t('CVPage.ITExperience.expoReactNativeSkills.GooglePlayStore'),
                    t('CVPage.ITExperience.expoReactNativeSkills.API'),
                    t('CVPage.ITExperience.expoReactNativeSkills.onboarding'),
                    t('CVPage.ITExperience.expoReactNativeSkills.encryptionAndDecryption'),
                    t('CVPage.ITExperience.expoReactNativeSkills.RNP'),
                    t('CVPage.ITExperience.expoReactNativeSkills.debugging'),
                    t('CVPage.ITExperience.expoReactNativeSkills.adobeXD'),
                    t('CVPage.ITExperience.expoReactNativeSkills.Tailwind'),
                  ]}
                />
                <CVItem
                  title={t('CVPage.ITExperience.reactViteTailwind')}
                  user={t('CVPage.ITExperience.reactViteTailwindUser')}
                  info={t('CVPage.ITExperience.reactViteTailwindInfo')}
                />
                <CVItem
                  title={t('CVPage.ITExperience.adobeXDFigma')}
                  user={t('CVPage.ITExperience.adobeXDFigmaUser')}
                  info={t('CVPage.ITExperience.adobeXDFigmaInfo')}
                />
                <CVItem
                  title={t('CVPage.ITExperience.some')}
                  user={t('CVPage.ITExperience.someUser')}
                  info={t('CVPage.ITExperience.someInfo')}
                />
                <CVItem
                  title={t('CVPage.ITExperience.AE')}
                  user={t('CVPage.ITExperience.AEUser')}
                  info={t('CVPage.ITExperience.AEInfo')}
                />
              </div>

            </div>
          </div>
        </div>

        <div className=' mt-20'>
          <MuiContactForm />
        </div>
      </div >
    </>
  )
}

export default CVPage