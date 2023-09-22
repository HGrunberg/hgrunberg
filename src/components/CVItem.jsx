import React, { useEffect, useState } from 'react'
import CustomP from './CustomP'
import { useTranslation } from 'react-i18next'

function CVItem({ title, year, user, info, mySkills }) {

    const { t } = useTranslation()

    return (
        <div className=' border-lighterDark p-2 border-2 md:border-none  '>
            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-2'>
                <CustomP className="text-primary">{title}</CustomP>
                <CustomP>{year || user}</CustomP>
            </div>
            <div className='my-5'>
                <CustomP alignment="md:text-left">{info}</CustomP>
            </div>
            <div className='flex flex-row flex-wrap justify-center md:justify-start items-center gap-2'>

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