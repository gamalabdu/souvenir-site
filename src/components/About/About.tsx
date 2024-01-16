import React, { useEffect } from 'react'
import postCard from '../../assets/images/Souvenir Postcard.png'
import {motion} from 'framer-motion'
import './styles.css'
import { Link } from 'react-router-dom'

const About = () => {

	const title = 'About'
  const description = 'Explore the works'

  const goToLink = (linkType: string) => {
		switch (linkType) {
			case 'youtube':
				return (window.location.href = 'https://www.youtube.com/@minsoo1542')
			case 'instagram':
				return (window.location.href = 'https://www.instagram.com/souvenir.media/')
      case 'vimeo':
				return (window.location.href = 'https://vimeo.com/user206359300')
			default:
				break
		}
	}

    const DynamicPage = ( title : string, description : string ) => {
      useEffect(() => {
        document.title = `Souvenier - ${title}`; // Update the document title
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', description); // Update the meta description tag
        }
      }, [title, description]);
    }

    DynamicPage(title, description)

  const fadeOut = {
		hidden: {
          opacity: 0,
	        y: 200,
		},
		show : {
      opacity: 1,
			y: 0,
			transition: {
				ease : 'easeInOut',
				duration: 1.6,
			}
		},
		exit : {
      opacity: 0,
			y: -200,
			transition : {
				ease : 'easeInOut',
				duration: 1.6,
			}
		}
	} 

  return (


		<motion.div className='about-container'
    initial="hidden"
    animate='show'
    exit='exit'
    variants={fadeOut}
    >

      <div className='about-inner'>


      <div className='left'>
        <img src={postCard} className='postcard' />
      </div>


      <div className='right'>

      <div className='info'>
          Min Soo Park 
          <br/>
          director 
          <br/>
          <button className='mail-button' onClick={() => (window.location.href = 'mailto:minsoo@souvenir.media')}>minsoo@souvenir.media</button>
        </div>

				<div className='info'>
          Ted Kim 
          <br/>
          producer 
          <br/>
          <button className='mail-button' onClick={() => (window.location.href = 'mailto:ted@souvenir.media')}>ted@souvenir.media</button>
        </div>

      </div>



      



			

			{/* <div className='lower-info'>

				<div className='info'>
          Min Soo Park 
          <br/>
          director 
          <br/>
          minsoo@souvenir.media
        </div>

				<div className='info'>
          Ted Kim 
          <br/>
          producer/director 
          <br/>
          ted@souvenir.media
        </div>

			</div> */}



      </div>

      <nav className='social-nav'>

<div className='instagram-button' onClick={() => goToLink('instagram')}>instagram</div>
<div className='social-divider'> | </div>
<div className='vimeo-button' onClick={() => goToLink('vimeo')}>vimeo</div>

</nav>

		</motion.div>
	)
}

export default About