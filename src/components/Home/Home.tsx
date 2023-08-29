import React, { useEffect } from 'react'
import './styles.css'

const Home = () => {


	const title = 'Souvenier'
    const description = 'Explore the works'

    const DynamicPage = ( title : string, description : string ) => {
      useEffect(() => {
        document.title = title; // Update the document title
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', description); // Update the meta description tag
        }
      }, [title, description]);
    }

    DynamicPage(title, description)

	return (
		<div className='home-container'>

            {/* <video className='enter-video' src='https://drive.google.com/uc?id=1axprrekHXCR37zxbzWCkc5uGbL2pedg1' 
            loop={true}
            preload='auto'                      
            autoPlay
            muted
            /> */}

          <video className='enter-video' src='https://drive.google.com/uc?id=1-D4tVxBcIZCP6JKHpYr1OOdsjqpvaz6H' 
            loop={true}
            preload='auto'                      
            autoPlay
            muted
            />


			{/* <div style= {{ padding:"56.25% 0 0 0", position:"relative"}} >
				<iframe
					src='https://player.vimeo.com/video/857242977?h=8296df035b&byline=0title=0&portrait=0&sidedock=0'
					style={{ position: "absolute", top:"0", left:"0", width:"100%", height: "100%"}}
					frameBorder='0'
					allow='autoplay; fullscreen; picture-in-picture'
					allowFullScreen></iframe>
			</div>
			<script src='https://player.vimeo.com/api/player.js'></script> */}
		</div>
	)
}

export default Home
