import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import CustomNavLink from './CustomNavLink'
import ReactCountryFlag from "react-country-flag"
import i18next from '../../translation/i18next'
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify';
import { Button } from '@mui/material'


function Navbar() {

  const { t } = useTranslation()

  const [menuIconClick, setMenuIconClick] = useState(false)
  const handleMenuIconClick = () => {
    setMenuIconClick(!menuIconClick)
  }
  const handleCloseMobileMenu = () => {
    setMenuIconClick(false)
  }

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng)
    localStorage.setItem("prefLng", lng)
    toast.success(`${t('lngUpdated')}`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    })
  }

  return (
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className='navbar-logo' onClick={handleCloseMobileMenu}>SHG</NavLink>
          <div className="menu-icon" onClick={handleMenuIconClick}>
            <span className="material-icons-outlined">{menuIconClick ? 'close' : 'menu'}</span>
          </div>

          <ul className={menuIconClick ? 'nav-menu active' : 'nav-menu'}>
            <CustomNavLink customLinkTo="/" name={t('navbar.home')} customOnClick={handleCloseMobileMenu} />
            <CustomNavLink customLinkTo="/my-cv" name={t('navbar.my-cv')} customOnClick={handleCloseMobileMenu} />
            {/* <CustomNavLink customLinkTo="/planio" name={t('navbar.planio')} customOnClick={handleCloseMobileMenu} /> */}
            <CustomNavLink customLinkTo="https://play.google.com/store/apps/details?id=com.planiobeta" name={t('navbar.planio')} customOnClick={handleCloseMobileMenu} />
            <CustomNavLink customLinkTo="https://cookiecare.io/" name={t('navbar.cookiecare')} customOnClick={handleCloseMobileMenu} />
          </ul>

          <ul className=' flex gap-6 country-flag-container'>
            <li>
              <Button>
                <ReactCountryFlag className='countryFlag' countryCode="DK" svg onClick={() => { changeLanguage("da") }} />
              </Button>
              <Button>
                <ReactCountryFlag className='countryFlag' countryCode="GB" svg onClick={() => { changeLanguage("en") }} />
              </Button>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar