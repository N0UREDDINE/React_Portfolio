import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">NOUREDDINE</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/Noureddiineee" rel='noreferrer' target='_blank'><FaFacebook/></a>
        <a href="https://www.instagram.com/nour__eddineee" rel='noreferrer' target='_blank'><FiInstagram/></a>
        <a href="https://twitter.com/NourFaqir" rel='noreferrer' target='_blank'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small><AiOutlineCopyrightCircle className='footer__copyright-icon'/> ELFAQIR NOUREDDINE. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer