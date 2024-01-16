import react from 'react'
import { IWork } from '../../models/IWork';


interface INumberButtonProps {
    selectedWork: IWork,
    currentVideoIndex: number,
    setCurrentVideoIndex: Function
}

export const NumberButtons = (props: INumberButtonProps)  => {

    const { selectedWork, currentVideoIndex, setCurrentVideoIndex } = props

    return (
        <div className='number-buttons'>
            <div>{selectedWork.names[currentVideoIndex].toLowerCase()}</div>
            <div className='numbers'>
                {selectedWork.videos.map((_, index) => (
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