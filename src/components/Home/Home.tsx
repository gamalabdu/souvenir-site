import React, { useEffect, useRef } from 'react'
import './styles.css'
import { motion } from 'framer-motion'
import frontPageReel from '../../assets/videos/frontpagereel.mov'

const Home = () => {
	const vidref = useRef<HTMLVideoElement | null>(null)

	// useEffect(() => {
	// 	if (vidref.current) {
	// 		vidref.current.play()
	// 	}
	// }, [])

	const title = 'Souvenier'
	const description = 'Explore the works'

	const DynamicPage = (title: string, description: string) => {
		useEffect(() => {
			document.title = title // Update the document title
			const metaDescription = document.querySelector('meta[name="description"]')
			if (metaDescription) {
				metaDescription.setAttribute('content', description) // Update the meta description tag
			}
		}, [title, description])
	}

	DynamicPage(title, description)

	const fadeOut = {
		hidden: {
			opacity: 0,
			// y: 200,
		},
		show: {
			opacity: 1,
			// y: 0,
			transition: {
				ease: 'easeInOut',
				duration: 1.6,
			},
		},
		exit: {
			opacity: 0,
			// y: -200,
			transition: {
				ease: 'easeInOut',
				duration: 1.6,
			},
		},
	}

	return (
		<motion.div
			className='home-container'
			initial='hidden'
			animate='show'
			exit='exit'
			variants={fadeOut}>

			{/* <video
				className='enter-video'
				src='https://drive.google.com/uc?id=1Je6dMBJKiN5srMcFS-qFfcYdlKeoA9pF'
				loop={true}
				ref={vidref}
				preload='auto'
				autoPlay
				muted
				playsInline
			/> */}

			<video
				className='enter-video'
				src={frontPageReel}
				loop={true}
				controls={false}
				// ref={vidref}
				preload='auto'
				autoPlay={true}
				muted={true}
				playsInline={true}
			/>
		</motion.div>
	)
}

export default Home
