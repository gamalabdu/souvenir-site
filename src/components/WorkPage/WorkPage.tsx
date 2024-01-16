import React, { useEffect, useState } from 'react'
import './styles.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IWork } from '../models/IWork'
import { NumberButtons } from './NumberButtons/NumberButtons'



const WorkPage = () => {



  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;


  useEffect(() => {

	window.scrollTo(0, 0)

}, [])
  

	useEffect(() => {

	  const handleClickOutside = (event: MouseEvent) => {

		const isInsideNumbers = (event.target as HTMLElement).closest('.number-buttons');
		const isInsideVideo = (event.target as HTMLElement).closest('.video-container');
      	const isInsideNav = (event.target as HTMLElement).closest('.nav-bar');
      	const isInsideLogo = (event.target as HTMLElement).closest('.logo');

  
		if (!isInsideVideo && !isInsideNav && !isInsideLogo &&!isInsideNumbers) {
			navigate('/work');
		}
	  };
  
	  document.addEventListener('click', handleClickOutside);
  
	  return () => {
		document.removeEventListener('click', handleClickOutside);
	  }

	}, [navigate]);
  


	const [ selectedWork, setSelectedWork ] = useState<IWork>()

	const [currentVideoIndex, setCurrentVideoIndex] = useState(0)


	useEffect( () => {

		if (state && state.item) {
		  setSelectedWork(state.item);
		}

	  }, [state]);
	



	  if (!selectedWork) {
		return null; // or display loading, error, or a placeholder component
	  }




	const fadeOut = {
		hidden: {
			opacity: 0,
			y: 200,
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				ease: 'easeInOut',
				duration: 1.6,
			},
		},
		exit: {
			opacity: 0,
			y: -200,
			transition: {
				ease: 'easeInOut',
				duration: 1.6,
			},
		},
	}

	return (
		<motion.div
			className='work-page-container'
			initial='hidden'
			animate='show'
			exit='exit'
			variants={fadeOut}>
			{
			
			selectedWork.videos ? (

				<div className='inner-container-camp'>
					<div className='inner-inner'>
						<div className='left-side'>
							<div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
								<motion.iframe
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{
										duration: 0.5,
									}}
									src={selectedWork.videos[currentVideoIndex]}
									style={{
										position: 'absolute',
										top: '0',
										left: '0',
										width: '100%',
										height: '97%',
									}}
									// allow='autoplay; fullscreen; picture-in-picture'
									allowFullScreen
								>
								</motion.iframe>
							</div>
							<NumberButtons selectedWork={selectedWork} currentVideoIndex={currentVideoIndex} setCurrentVideoIndex={setCurrentVideoIndex} />
						</div>

						<div className='right-side'>
							<div className='right-side-title'>{selectedWork.name}</div>
							<br />
							<div className='description'>{selectedWork.description}</div>
						</div>
					</div>
				</div>

			) : (

				<div className='inner-container'>
					<iframe
						src={selectedWork.vimeo}
						className='inner-video'
						allow='autoplay; fullscreen; picture-in-picture'></iframe>
					<script src='https://player.vimeo.com/api/player.js'></script>
					<div className='bottom-text'>
						<div className='inner-text'>
							<div
								style={{
									fontFamily: 'Poppins-Extralight',
									fontSize: '3vmin',
									color: 'white',
								}}>
								{selectedWork.name.toLowerCase()}
							</div>
							<br />
							<div> {selectedWork.year.toLowerCase()} </div>
							<div> {
							selectedWork.color
							// .toLowerCase()
							} </div>
							<div> {selectedWork.time.toLowerCase()} </div>
							<div> {selectedWork.type.toLowerCase()} </div>
						</div>
					</div>
				</div>
			)}

		</motion.div>
	)
}

export default WorkPage
