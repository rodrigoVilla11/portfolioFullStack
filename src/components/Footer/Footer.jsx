import React from 'react'
import { Link } from 'react-scroll'
import instagram from '../../assets/logos/instagram-color.png'
import github from '../../assets/logos/github-color.png'
import linkedin from '../../assets/logos/linkedin-color.png'
import {useTranslation} from "react-i18next"

const Footer = () => {
  const {t, i18n} = useTranslation(["intro"])

  return (
    <div className='bg-spacecadet text-white w-full h-62 flex flex-col items-center justify-center p-10'>
        <div className='flex items-center '>
        <div className='w-1/2'>
            <h3 className='text-2xl pb-5'>RODRIGO NICOLAS VILLARREAL</h3>
            <p>{t("presentation")}</p>
        </div>
        <div className='w-1/2 flex flex-col '>
                <h3 className='self-end text-2xl pb-5 mr-14'>{t("social_media")}</h3>
            <div className='flex self-end justify-end w-full'>
                
            <a target="_blank" href="https://www.instagram.com/_villarodrigo/"><img className="w-12 h-12 mx-2" src={instagram}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/rodrigonicolasvillarreal/"><img className="w-12 h-12 mx-2"  src={linkedin}/></a>
            <a target="_blank" href="https://github.com/rodrigoVilla11"> <img className="w-12 h-12 mx-2"  src={github}/></a>
            </div>
        </div>
    </div>
    <div className=''>
        <p>Copyright | {t("copyright")} <Link to="intro" smooth={true} duration={500}><span className='hover:cursor-pointer'>Rodrigo Nicolas Villarreal</span></Link></p>
    </div>
    </div>
  )
}

export default Footer