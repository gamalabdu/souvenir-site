import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import './styles.css'

const Footer = () => {

const goToLink = (linkType: string) => {
		switch (linkType) {
			case 'youtube':
				return (window.location.href = 'https://www.youtube.com/@minsoo1542')
			case 'instagram':
				return (window.location.href = 'https://www.instagram.com/souvenir.media/')
			default:
				break
		}
	}

  return (
    <div className='footer-container'>

        <div className='inner'>

            <div className='contact'> Contact : </div>
    
                <div className='social-icons' onClick={() => goToLink('instagram') }><FaInstagram/></div>
                <div className='social-icons' onClick={() => goToLink('youtube') }><AiOutlineYoutube/></div>

        </div>

    </div>
  )
}

export default Footer