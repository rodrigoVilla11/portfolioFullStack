import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { useNavigate } from 'react-router-dom'
import {useTranslation} from "react-i18next"

const Nav = () => {
  const {t, i18n} = useTranslation(["nav"])
  const changeLanguage = () =>{
    if(i18n.language === "en"){
    i18n.changeLanguage("es")}
    else if(i18n.language === "es"){
      i18n.changeLanguage("en")
    }
  }

  const navigate = useNavigate()
  
  const handleClick = (e) =>{
    e.preventDefault()
    navigate("/")
  }

  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleDropdown = () => {
    setMenuVisible(!isMenuVisible);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
   
    <div className='w-full bg-spacecadet px-10 py-4 flex justify-between fixed text-white z-50 shadow-2xl'>
       
        <div className='flex items-center'>
            <Link to="intro" onClick={scrollToTop} smooth={true} duration={500}><button className='bg-indigo rounded-xl hover:shadow-2xl text-white hover:bg-dogwoodrose hover:cursor-pointer p-2 px-6' onClick={handleClick}>RODRIGO N. VILLARREAL</button></Link>
        </div>
        <div>
          <button onClick={toggleDropdown} className='bg-indigo rounded-xl hover:shadow-2xl text-white hover:bg-dogwoodrose hover:cursor-pointer p-2 px-6 md:hidden'>More</button>
          {isMenuVisible && (
          <div className='w-1/3 h-auto absolute top-16 right-0 mt-2 p-2 bg-indigo border rounded shadow flex flex-col items-center space-y-6'>
            <Link onClick={scrollToTop} to='intro' smooth={true} duration={500}>
              <button onClick={handleClick} className='w-full hover:cursor-pointer'>
                {t('home')}
              </button>
            </Link>
            <Link to='about' smooth={true} duration={500}>
              <p className='w-full hover:cursor-pointer'>{t('about')}</p>
            </Link>
            <Link to='projects' smooth={true} duration={500}>
              <p className='w-full hover:cursor-pointer'>{t('projects')}</p>
            </Link>
            <Link to='contact' smooth={true} duration={500}>
              <p className='w-full hover:cursor-pointer '>{t('contact')}</p>
            </Link>
            <button
              className='w-full bg-indigo rounded-xl flex items-center justify-center hover:shadow-2xl text-white hover:bg-dogwoodrose hover:cursor-pointer'
              onClick={changeLanguage}
            >
              EN/ES
            </button>
          </div>
        )}
        </div>
        <div className='hidden md:flex md:space-x-6 md:items-center'>
       <Link onClick={scrollToTop} to="intro" smooth={true} duration={500}><button onClick={handleClick}className='w-24 hover:cursor-pointer'>{t("home")}</button></Link>
        <Link to="about" smooth={true} duration={500}><p className='w-24 hover:cursor-pointer'>{t("about")}</p></Link>
        <Link to="projects" smooth={true} duration={500}><p className='w-24 hover:cursor-pointer'>{t("projects")}</p></Link>
        <Link to="contact" smooth={true} duration={500}> <p className='w-24 hover:cursor-pointer '>{t("contact")}</p></Link>
        <button className='w-24 bg-indigo rounded-xl  flex items-center justify-center hover:shadow-2xl text-white hover:bg-dogwoodrose hover:cursor-pointer' onClick={changeLanguage}>EN/ES</button>
       </div>
    </div>
  )
}

export default Nav