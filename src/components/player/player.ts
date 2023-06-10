import { FC } from 'react'
import { Card } from 'react-bootstrap'
import { useAppDispatch } from '../../hooks/store-typed-hook/store-typed-hooks'
import { usePlay } from '../../hooks/use-play'
import { setPlayState } from '../../services/actions/set-play-state'
import { PlayBtn } from '../play-btn/play-btn'
import './player.scss'


export const Player: FC = () => {
    const { play, activeStation } = usePlay()
    const dispatch = useAppDispatch()

    const handlePlay = () => dispatch(setPlayState(!play))

    return (
    activeStation && (
      <Card>
        <Card.Body>
          <Card.Title>{activeStation && activeStation.name}</Card.Title>
          <PlayBtn play={play} handlePlay={handlePlay} />
        </Card.Body>
      </Card>
    )
}