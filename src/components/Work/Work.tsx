import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './styles.css'
import { Link } from 'react-router-dom'

const Work = () => {

	const branded = [
		{
			name: 'Sesinko',
			names: [
				`Sesinko x Air Jordan 1 Retro High`,
				`Sesinko x Air Jordan 1 OG`,
				`Sesinko x Air Max 1 Blueprint`,
				`Sesinko x Air Force 1 ‘Little Acre’`,
				`Sesinko x Air Jordan 1 Retro High ‘Heirloom’`,
			],
			title: 'sesinko x nike',
			description: `Sesinko and Souvenir have worked closely over the past years delving into the sneaker scene of New York City. From the Bronx to Queens, our joint ventures have been spotlighting individuals who continually redefine creative boundaries, capturing their stories that celebrate both unity and innovation. `,
			src: 'https://drive.google.com/uc?id=1fyBnf3cAYeI2HNvm0Ex0-ryrWwKaqfnR',
			thumbnail:
				'https://drive.google.com/uc?id=1e6BikLGElFwEMlqeqAtOCBlLB6MyBFlH',
			vimeo: '',
			videos: [
				'https://player.vimeo.com/video/857293083?h=8df3d3c8a9&title=0&byline=0&portrait=0',
				'https://player.vimeo.com/video/857292737?h=632ffb3a9d&title=0&byline=0&portrait=0',
				'https://player.vimeo.com/video/857293765?h=a54352527a&title=0&byline=0&portrait=0',
				'https://player.vimeo.com/video/857295544?h=0fcdbeb0b2&title=0&byline=0&portrait=0',
			],
		},
		{
			name: 'Atoms',
			names: [
				'Atoms',
				'Atoms Aram',
				'Atoms Stories: Comfort Is?',
				'Atoms at Places',
			],
			title: 'atoms',
			description: `Souvenir's collaboration with Atoms, the renowned footwear brand for its comfort, has resulted in a series of campaigns. We employed a diverse range of storytelling formats, including documentaries to short commercials. These campaigns have cumulative video views surpassing the milestone of 70,000.`,
			src: 'https://drive.google.com/uc?id=1l9ANPSEwMCTm2kUhCe8lZfCEoUOYiEqx',
			thumbnail:
				'https://drive.google.com/uc?id=1sZDVp14cxouJH1YO6-cM1dHXWSSjHoYM',
			vimeo: '',
			videos: [
				'https://player.vimeo.com/video/857295867?h=141893f008&title=0&byline=0&portrait=0',
				'https://player.vimeo.com/video/857296183?h=412b348245&title=0&byline=0&portrait=0',
				'https://player.vimeo.com/video/857298652?h=b5b5641405&title=0&byline=0&portrait=0',
				'https://player.vimeo.com/video/857297447?h=6a8bcdddce&title=0&byline=0&portrait=0',
			],
		},
		{
			name: 'Libily',
			year: '2022',
			color: 'Digital, Color',
			time: '0m 51s',
			type: 'Campaign',
			src: 'https://drive.google.com/uc?id=1y0h0vPbIEs3g04x-lntomPCAoxfLoKGx',
			thumbnail:
				'https://drive.google.com/uc?id=1PcmXxXJHjETGoWvQ683U-5Q4_0FdvDX_',
			vimeo:
				'https://player.vimeo.com/video/857246957?h=7d40246eb7&title=0&byline=0&portrait=0',
			videos: [],
		},
		{
			name: 'Ahn Byeong Woong - Surf Live',
			year: '2022',
			color: 'Digital, Color, Black and White',
			time: '15m 04s',
			type: 'Campaign',
			src: 'https://drive.google.com/uc?id=1u_SJfKg4CynlBgKEGBVQM_Ybc30NqJKU',
			thumbnail:
				'https://drive.google.com/uc?id=1CPGRAARXD4vI231tVD8fdntLj0Z16feP',
			vimeo:
				'https://player.vimeo.com/video/857290031?h=6333bcd679&title=0&byline=0&portrait=0',
			videos: [],
		},
	]

	const musicVideos = [
		{
			name: 'Becca Mancari - Over and Over',
			year: '2023',
			color: "Digital, Color",
			time:"2m 32s",
			type: 'Music Video',
			src: 'https://drive.google.com/uc?id=1-D4tVxBcIZCP6JKHpYr1OOdsjqpvaz6H',
			
			thumbnail:
				'https://drive.google.com/uc?id=1qshjh00yY6nlyNVvjufo8z63Z9BTdQt1',
			vimeo:
				'https://player.vimeo.com/video/857243867?h=d304dacaf9&title=0&byline=0&portrait=0',
			videos: [],
		},
		{
			name: 'Chris56 - Mr.Officer',
			year: '2022',
			color: "Digital, Color",
			time:"2m 52s",
			type: 'Music Video',
			src: 'https://drive.google.com/uc?id=1I0U9QOc0WVVM6zg-Cjc-PKD1yrYS6mHi',
			thumbnail:
				'https://drive.google.com/uc?id=1qCD-96FF6tZoJM3xmZCkl4o6cSIhK6rN',
			vimeo:
				'https://player.vimeo.com/video/857247574?h=1b1bd9011a&title=0&byline=0&portrait=0',
			videos: [],
		},
		{
			name: 'Eddie - Seahaven Island',
			year: '2021',
			color: "Digital, Color",
			time:"3m 32s",
			type: 'Music Video',
			src: 'https://drive.google.com/uc?id=1y0h0vPbIEs3g04x-lntomPCAoxfLoKGx',
			thumbnail:
				'https://drive.google.com/uc?id=1GbJSkoSOSUVtzrUTvodghgqDvnR2Pog_',
			vimeo:
				'https://player.vimeo.com/video/857289147?h=0b68bdec99&title=0&byline=0&portrait=0',
			videos: [],
		},
		{
			name: 'Genevieve Stokes - You and Me',
			year: '2023',
			color: "Digital, Color",
			time:"2m 55s",
			type: 'Music Video',
			src: 'https://drive.google.com/uc?id=1jtTPiDx8fD2RPuYFVBFz95tzofRaWYLJ',
			thumbnail:
				'https://drive.google.com/uc?id=1fBPKw4jlsk2v1LalR90hJCy31gJZf3yq',
			vimeo:
				'https://player.vimeo.com/video/857247993?h=38c533a18f&title=0&byline=0&portrait=0',
			videos: [],
		},
		{
			name: 'Han - Whisper',
			year: '2023',
			color: "Digital, Color",
			time:"3m 15s",
			type: 'Music Video',
			src: 'https://drive.google.com/uc?id=18AEEmfjbU2xR6mp73RUPf1eI8XPa_gJu',
			thumbnail:
				'https://drive.google.com/uc?id=14VrVOTYsXEKOFRuj4Wn3DRbfDO9Eo3xm',
			vimeo:
				'https://player.vimeo.com/video/857244909?h=cd9829e60c&title=0&byline=0&portrait=0',
			videos: [],
		},

		{
			name: 'Markis Black - Believer',
			year: '2022',
			color: "Digital, Color",
			time:"2m 50s",
			type: 'Music Video',
			src: 'https://drive.google.com/uc?id=1hEVnr9Umu4gY9jpBkHzKFUoUDf1V-1DU',
			thumbnail:
				'https://drive.google.com/uc?id=1BRASTTCnb9fjc4Vu19ncWlzD3tn7ZOH9',
			vimeo:
				'https://player.vimeo.com/video/857246478?h=53daa38116&title=0&byline=0&portrait=0',
			videos: [],
		},

		{
			name: 'min.a - company',
			year: '2022',
			color: "Digital, Color",
			time:"2m 21s",
			type: 'Music Video',
			src: 'https://drive.google.com/uc?id=1xm2-tsp5b78DSbUlpoi2eGe9O6q9C3Vz',
			thumbnail:
				'https://drive.google.com/uc?id=1Eft-PLG0_5IancXpbi4KsB58QUZs1qeP',
			vimeo:
				'https://player.vimeo.com/video/857247142?h=c4422973e4&title=0&byline=0&portrait=0',
			videos: [],
		},

		{
			name: 'Thuslove - Put on Dog',
			year: '2023',
			color: "Digital, Color",
			time:"2m 32s",
			type: 'Music Video',
			src: 'https://drive.google.com/uc?id=1jeQAwbEwLSYLgKJAY_CiG9JMrV2hbjbD',
			thumbnail:
				'https://drive.google.com/uc?id=1-BvHgmIL3FhfO9mtZrmOj9Zb478XAf0e',
			vimeo: 'https://player.vimeo.com/video/859175764?h=9a1bf1e216&title=0&byline=0&portrait=0',
			videos: [],
		},

		{
			name: 'Western Kite - Sku Blue',
			year: '2022',
			color: "Digital, Color",
			time:"3m 48s",
			type: 'Music Video',
			src: 'https://drive.google.com/uc?id=1j6YohMpLJMy4T6UgEzylXaj3dGt6QNDC',
			thumbnail:
				'https://drive.google.com/uc?id=197wsfRrbAlgiU0DiE-v3DGIO1qn9M-mX',
			vimeo:
				'https://player.vimeo.com/video/857249011?h=e71ef25539&title=0&byline=0&portrait=0',
			videos: [],
		},
		{
			name: 'Yojung - Is That All You Got?',
			year: '2023',
			color: "Digital, Color",
			time:"1m 25s",
			type: 'Music Video',
			src: 'https://drive.google.com/uc?id=1FCKGKXJXB1Vc-wpoGl4Boh368Cb79JHY',
			thumbnail:
				'https://drive.google.com/uc?id=1S_nLJ3bkgwMjRBtQburuaPbp1ua8XZ6u',
			vimeo:
				'https://player.vimeo.com/video/857245638?h=89fc242fe2&title=0&byline=0&portrait=0',
			videos: [],
		},
	]

	const creativeShorts = [
		{
			name: 'Merlin',
			year: '2022',
			color: "Digital, Color",
			time:"5m 22s",
			type: 'Creative Short',
			src: 'https://drive.google.com/uc?id=1ity1bholDWbWpSi1pBnt7tA8joidCgGo',
			thumbnail:
				'https://drive.google.com/uc?id=1y0fdjOXR-PeyNfba8SMjDaHEgPHKSENk',
			vimeo:
				'https://player.vimeo.com/video/857291325?h=d4e6063b23&title=0&byline=0&portrait=0',
			videos: [],
		},
		{
			name: 'Get Thee On The Dancefloor',
			year: '2023',
			color: "Digital, Color",
			time:"26m 15s",
			type: 'Creative Short',
			src: 'https://drive.google.com/uc?id=1usN4nZybjlqCPnk1wYzKzq-eWKkGWv99',
			thumbnail:
				'https://drive.google.com/uc?id=1Nz2XTkN-rcHMdUG0iv2fem8Ml2UM2_US',
			vimeo:
				'https://player.vimeo.com/video/857246221?h=736d850762&title=0&byline=0&portrait=0',
			videos: [],
		},
		{
			name: 'Yet To Dream',
			year: '2022',
			color: "Digital, Color",
			time:"7m 18s",
			type: 'Creative Short',
			src: 'https://drive.google.com/uc?id=13XYR6GWQB0l1lMizZ-rKeVTGaDiZUC3b',
			thumbnail:
				'https://drive.google.com/uc?id=1k2CByvhq189ensAxMHNtmvBBJlnDNdjc',
			vimeo:
				'https://player.vimeo.com/video/857333532?h=a484eabe97&title=0&byline=0&portrait=0',
			videos: [],
		},
		{
			name: 'Solacity',
			year: '2023',
			color: "Digital, Color",
			time:"1m 13s",
			type: 'Creative Short',
			src: 'https://drive.google.com/uc?id=1meAOv6AB9PQT61JyC8B3A-QjZ5I4s2_W',
			thumbnail:
				'https://drive.google.com/uc?id=10cRz6F5Wza8F6_ZqQeUcP93klsg-D462',
			vimeo: '',
			videos: [],
		},
	]

	const title = 'Work'
	const description = 'Explore the works'

	const DynamicPage = (title: string, description: string) => {
		useEffect(() => {
			document.title = `Souvenier - ${title}` // Update the document title
			const metaDescription = document.querySelector('meta[name="description"]')
			if (metaDescription) {
				metaDescription.setAttribute('content', description) // Update the meta description tag
			}
		}, [title, description])
	}

	DynamicPage(title, description)

	const [choice, setChoice] = useState<string>('campaign')

	const [loadedData, setLoadedData] = useState<
		{ name: string; src: string; thumbnail: string }[]
	>([...branded])

	const [isLoading, setIsLoading] = useState(true)

	const handleChoice = (choice: string) => {
		if (choice === 'campaign') {
			setChoice('campaign')
			setLoadedData([...branded])
		} else if (choice === 'music videos') {
			setChoice('music videos')
			setLoadedData([...musicVideos])
		} else if (choice === 'creative shorts') {
			setChoice('creative shorts')
			setLoadedData([...creativeShorts])
		}
	}

	useEffect(() => {
		setIsLoading(true)

		setTimeout(() => {
			setIsLoading(false)
		}, 2000)
	}, [choice])

	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	const [isLoaded, setIsLoaded] = useState(false)

	const videoRefs = useRef<Array<HTMLVideoElement | null>>(
		branded.map(() => null)
	)

	const onHover = (idx: number) => {
		setHoveredIndex(idx)
	}

	const onLeave = () => {
		setHoveredIndex(null)
	}

	useEffect(() => {
		videoRefs.current.forEach((video, index) => {
			if (video && video.paused && isLoaded) {
				if (index === hoveredIndex) {
					setTimeout(() => video.play(), 300)
				} else {
					video.pause()
					video.currentTime = 0 // Reset the video to the beginning
				}
			}
		})
	}, [hoveredIndex])

	const videoItem = {
		hidden: {
			opacity: 0,
			y: 200,
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 2,
				ease: [0.43, 0.13, 0.23, 0.96],
				staggerChildren: 1,
			},
		},
		exit: {
			opacity: 0,
			y: -200,
		},
	}

	const transition = {
		duration: 2,
		ease: [0.43, 0.13, 0.23, 0.96],
		staggerChildren: 1,
	}

	return (
		<AnimatePresence initial={true} mode='wait'>
			<motion.div
				className='works-container'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{
					opacity: 0,
				}}
				transition={{
					duration: 1,
					delay: 1,
					ease: [0.43, 0.13, 0.23, 0.96],
					staggerChildren: 0.1,
				}}>
				<div className='title-choices'>
					<ul className='choices'>
						<li
							className={choice === 'campaign' ? 'active' : 'not'}
							onClick={() => handleChoice('campaign')}>
							{choice === 'campaign' ? '[ campaign ]' : 'campaign'}
						</li>
						<li
							className={choice === 'music videos' ? 'active' : 'not'}
							onClick={() => handleChoice('music videos')}>
							{choice === 'music videos' ? '[ music videos ]' : 'music videos'}
						</li>
						<li
							className={choice === 'creative shorts' ? 'active' : 'not'}
							onClick={() => handleChoice('creative shorts')}>
							{choice === 'creative shorts'
								? '[ creative shorts ]'
								: 'creative shorts'}
						</li>
					</ul>
				</div>

				{isLoading ? (
					<motion.div
						className='loading'
						initial={{ opacity: 0 }} // Initial state: transparent
						animate={{ opacity: 1 }} // Animation state: fully visible
						exit={{ opacity: 0 }} // Exit state: transparent
						transition={{ duration: 0.5 }} // Transition for fade in/out
					>
						<motion.div className='loading-icon'>
							<div className='simple-spinner'>
								<span></span>
							</div>
						</motion.div>
					</motion.div>
				) : (
					<div className='works'>
						{loadedData.map((item, idx) => {
							const isHovered = hoveredIndex === idx

							return (
								<motion.div
									className='video-container'
									initial='hidden'
									animate='show'
									exit='exit'
									variants={videoItem}
									transition={transition}
									aria-disabled={isLoaded}
									onMouseEnter={() => onHover(idx)}
									onMouseLeave={onLeave}
									key={idx}>
									<Link key={idx} to={`/work/${encodeURIComponent(item.name)}`} state={{ item }}>
										<video
											ref={(video) => (videoRefs.current[idx] = video)}
											className={`box-video ${isHovered ? 'visible' : ''}`}
											src={item.src}
											poster={item.thumbnail}
											loop={true}
											preload='auto'
											muted
											onLoadedData={() => setIsLoaded(true)}
										/>

										<div
											className={`text-overlay ${isHovered ? 'visible' : ''}`}>
											{item.name}
										</div>

										<img
											className={`box-thumbnail ${isHovered ? '' : 'visible'}`}
											src={item.thumbnail}
											alt={item.name}
										/>
									</Link>
								</motion.div>
							)
						})}
					</div>
				)}
			</motion.div>
		</AnimatePresence>
	)
}

export default Work
