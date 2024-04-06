import React from 'react'

import { FaInstagram, FaLaughWink, FaReact, FaPeopleArrows } from 'react-icons/fa';
import { SiAdobexd } from 'react-icons/Si';


function SkillsIconContainer() {
    return (
        <div className=' my-4 flex flex-wrap flex-row gap-6 justify-center items-center'>
            <FaReact size={48} />
            <FaPeopleArrows size={48}/>
            <SiAdobexd size={48}/>
            <FaLaughWink size={48}/>
        </div>
    )
}

export default SkillsIconContainer