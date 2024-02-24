import React, { useEffect, useState } from 'react'
import CustomP from './CustomP'
import { useTranslation } from 'react-i18next'
import '../../src/index.css'

function CVItem({ title, year, user, info, mySkills, className }) {

    const { t } = useTranslation()

    return (
        <div className='p-2 md:p-8 relative customBorder'>
            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-2'>
                <CustomP className="text-primary">{title}</CustomP>
                <CustomP>{year || user}</CustomP>
            </div>
            <div className='my-5 max-w-prose'>
                <CustomP alignment="md:text-left" className={className}>{info}</CustomP>
            </div>
            <div className='flex flex-row flex-wrap justify-center md:justify-start items-center gap-2 max-w-4xl'>

                {mySkills?.map(function (skill) {
                    return (
                        <CustomP key={skill} className=" border border-solid border-primary px-4 py-2 rounded-lg">{skill}</CustomP>
                    )
                })}
            </div>
        </div>
    )
}

export default CVItem