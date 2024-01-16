import React, { useState, useEffect, useRef, useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './styles.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {createClient} from '@sanity/client'
import { IWork } from '../models/IWork'


interface IWorkProps {
	choice: string,
	setChoice: Function
}

const Work = (props: IWorkProps) => {

	const { choice, setChoice } = props 

	const sanityClient = createClient({
		projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
		dataset: process.env.REACT_APP_SANITY_DATASET,
		useCdn: true, // set to `false` to bypass the edge cache
		apiVersion: '2024-01-14', // use current date (YYYY-MM-DD) to target the latest API version
		token: process.env.REACT_APP_SANITY_TOKEN,
        ignoreBrowserTokenWarning: true
	  })


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



	const [ creativeShorts , setCreativeShorts ] = useState<IWork[]>([])

	const [ campaigns , setCampaigns ] = useState<IWork[]>([])

	const [ musicVideos, setMusicVideos ] = useState<IWork[]>([])

	const [loadedData, setLoadedData] = useState< IWork[]> ([])

	const [isLoading, setIsLoading] = useState(true)


	
	// useEffect(() => {


	// 	const getWorks = async () => {

	// 		await sanityClient.fetch(`
	// 			*[_type == "work"]
	// 			{
	// 				name,
	// 				names[],
	// 				thumbnail{
	// 					asset-> {
	// 						url
	// 					}
	// 				},
	// 				time,
	// 				vimeo,
	// 				description,
	// 				year,
	// 				color[],
	// 				type,
	// 				videoSrc{
	// 					asset-> {
	// 						url
	// 					}
	// 				},
	// 				videos[],
	// 			}
	// 		`)
			
	// 		.then((worksData) => {

	// 			let myWorks = worksData

	// 			let workEntries: IWork[] = myWorks.map((work: any) => ({

	// 				name: work.name,
	// 				names: work.names,
	// 				type: work.type,
	// 				description: work.description,
	// 				videos: work.videos,
	// 				color: work.color,
	// 				time : work.time,
	// 				thumbnail: work.thumbnail,
	// 				videoSrc : work.videoSrc,
	// 				vimeo : work.vimeo,
	// 				year : work.year,

	// 			}))


	// 			workEntries.map((work : any) => {

	// 				if (work.type === 'Campaign') {

	// 					setCampaigns((oldCampaigns) => [...oldCampaigns, work]);

	// 				} else if (work.type === 'Music Video') {

	// 					setMusicVideos((oldMusicVideos) => [...oldMusicVideos, work]);

	// 				} else if (work.type === 'Creative Short') {

	// 					setCreativeShorts((oldCreativeShorts) => [...oldCreativeShorts, work]);

	// 				}

	// 			})

	// 		})
			
	// 		.catch((error) => {

	// 			console.log(error)

	// 		})
			
	// 		setIsLoading(false)
	// 	    setLoadedData([...campaigns])

	// 	}

	// 	getWorks()

	// }, [])


	useEffect(() => {

		const getWorks = async () => {

		  try {

			// setIsLoading(true)
	
			const worksData = await sanityClient.fetch(`
			  *[_type == "work"]
			  {
				name,
				names[],
				thumbnail{
				  asset-> {
					url
				  }
				},
				time,
				vimeo,
				description,
				year,
				color[],
				type,
				videoSrc{
				  asset-> {
					url
				  }
				},
				videos[],
			  }
			`);
	
			const workEntries: IWork[] = worksData.map((work: any) => ({
			  name: work.name,
			  names: work.names,
			  type: work.type,
			  description: work.description,
			  videos: work.videos,
			  color: work.color,
			  time: work.time,
			  thumbnail: work.thumbnail,
			  videoSrc: work.videoSrc,
			  vimeo: work.vimeo,
			  year: work.year,
			}));
	
			const campaigns = workEntries.filter((work) => work.type === 'Campaign');
			const musicVideos = workEntries.filter((work) => work.type === 'Music Video');
			const creativeShorts = workEntries.filter((work) => work.type === 'Creative Short');
	
			setCampaigns(campaigns);
			setMusicVideos(musicVideos);
			setCreativeShorts(creativeShorts);

			setLoadedData(campaigns)

		  } catch (error) {

			console.error(error)

		  } finally {

			// setIsLoading(false)

		  }

		}
	
		getWorks()

	  }, [])


	// const initialData = choice === 'campaign' ? campaigns : choice === 'music videos' ? musicVideos : choice === 'creative shorts' ? creativeShorts : [];




	const handleChoice = (selectedChoice : string) => {

		setChoice(selectedChoice); // Update the choice state
	
		// Update the loadedData based on the selected choice
		if (selectedChoice === 'campaign') {
		  setLoadedData([...campaigns]);
		} else if (selectedChoice === 'music videos') {
		  setLoadedData([...musicVideos]);
		} else if (selectedChoice === 'creative shorts') {
		  setLoadedData([...creativeShorts]);
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
		campaigns.map(() => null)
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

				{
				isLoading ? (
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
						{
						
						loadedData.map((item, idx) => {

							// console.log(item)

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
											src={item.videoSrc.asset.url}
											poster={item.thumbnail.asset.url}
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
											src={item.thumbnail.asset.url}
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
