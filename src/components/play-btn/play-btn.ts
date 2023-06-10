import { FC } from 'react'
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

interface Props {
    play: boolean
    handlePlay: () => void
}

export const PlayBtn: FC<Props> = ({play, handlePlay}) => {
    return play ? (
        <FaPauseCircle onClick={handlePlay} className='player__control' />
    ) : (
        <FaPlayCircle onClick={handlePlay} className='player__control' />
    )
}