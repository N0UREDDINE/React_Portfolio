import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/N0UREDDINE" rel='noreferrer' target='_blank'><BsGithub/></a>
        <a href="https://www.linkedin.com/in/noureddine-elfaqir-327276237" rel='noreferrer' target='_blank'><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocials