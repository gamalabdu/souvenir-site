import React, { useEffect, useState } from 'react'
import './styles.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const WorkPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const location = useLocation()

	const navigate = useNavigate()

	const state = location.state

	const video = state.item.vimeo
	const name = state.item.name
	const title = state.item.title
	const description = state.item.description
	const year = state.item.year
	const color = state.item.color
	const time = state.item.time
	const type = state.item.type

	let videos: any[] = []
	let names : string[] = []

	if (state.item.videos) {
		videos = [...state.item.videos]
	}

	if (state.item.names) {
		names = [...state.item.names]
	}

	const backToWork = () => {
		navigate('/works')
	}

	const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

	const NumberButtons = () => {
		return (
			<div className='number-buttons'>
				<div>{names[currentVideoIndex].toLowerCase()}</div>
				<div className='numbers'>
					{videos.map((_, index) => (
						<button
							className={
								index === currentVideoIndex ? 'choosen' : 'the-buttons'
							}
							key={index}
							onClick={() => setCurrentVideoIndex(index)}>
							{index + 1}
						</button>
					))}
				</div>
			</div>
		)
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
			{videos.length != 0 ? (
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
									src={videos[currentVideoIndex]}
									style={{
										position: 'absolute',
										top: '0',
										left: '0',
										width: '100%',
										height: '97%',
									}}
									allow='autoplay; fullscreen; picture-in-picture'
									allowFullScreen></motion.iframe>
							</div>
							<NumberButtons />
						</div>

						<div className='right-side'>
							<div className='right-side-title'>{name}</div>
							<br />
							<div className='description'>{description}</div>
						</div>
					</div>
				</div>
			) : (
				<div className='inner-container'>
					<iframe
						src={video}
						className='inner-video'
						allow='autoplay; fullscreen; picture-in-picture'></iframe>
					<script src='https://player.vimeo.com/api/player.js'></script>
					<div className='bottom-text'>
						<div className='inner-text'>
							<div
								style={{
									fontFamily: 'Poppins-Extralight',
									fontSize: '2vmin',
									color: 'white',
								}}>
								{name.toLowerCase()}
							</div>
							<br />
							<div> {year.toLowerCase()} </div>
							<div> {color.toLowerCase()} </div>
							<div> {time.toLowerCase()} </div>
							<div> {type.toLowerCase()} </div>
						</div>
					</div>
				</div>
			)}
		</motion.div>
	)
}

export default WorkPage
