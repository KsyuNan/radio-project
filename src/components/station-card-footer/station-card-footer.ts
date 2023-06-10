import { FC } from 'react'
import { Button, Card} from 'react-bootstrap'
import { Station } from '../../typedef'
import { useAppDispatch, useAppSelector } from '../../hooks/store-typed-hook/store-typed-hooks'
import { setFavouriteStation } from '../../services/actions/set-favourite-station'
import { setActiveStation } from '../../services/actions/set-active-station'
import { setPlayState } from '../../services/actions/set-play-state'
import { removeFavouriteStation } from '../../services/actions/remove-favourite-station'
import { ToggleIconButton } from '../../views/components/toggle-icon-button'

interface Props {
    station: Station
}

export const StationCardFooter: FC<Props> = ({ station }) => {
  // @ts-ignore
  const play = useAppSelector((state) = state.player.play)
  const activeStation = useAppSelector((state) => state.stations.activeStation)
  const favourites = useAppSelector((state) => state.stations.favourites);
  const isFavourite = favourites.some(item => item.changeuuid === station.changeuuid);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (isFavourite) {
      dispatch(removeFavouriteStation(station.changeuuid));
    } else {
      dispatch(setFavouriteStation(station));
    }
  };

  const handlePlay = () => {
    if (activeStation?.changeuuid !== station.changeuuid && play) {
      dispatch(setActiveStation(station));
    } else {
      dispatch(setActiveStation(station));
      dispatch(setPlayState(!play));
    }
  };

 return (
    <Card.Footer> 
      <Button>Go to page</Button>
      <Button className="mx-2" onClick={handlePlay}>
      {activeStation?.changeuuid === station.changeuuid && play ? "Pause" : "Play"}
      </Button>
      <ToggleIconButton active={isFavourite} onClick={handleClick} />
    </Card.Footer>
 )

}