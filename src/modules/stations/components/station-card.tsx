import { Station } from '../../../typedef'
import { Card, Col, Row, Button} from 'react-bootstrap'
import {BiRadio } from 'react-icons/bi'
import { ToggleIconButton } from '../../../views/components/toggle-icon-button'
import { setFavourite } from '../../../services/actions'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'

interface Props {
  station: Station
}


export const StationCard = ({station}: Props) => {

  const isFavourite = useAppSelector(state => state.stations.favourites[station.stationuuid])
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(
      setFavourite({
        id: station.stationuuid, 
        favourite: !isFavourite
      })
    )
  }

  return (
    <Card>
     <Card.Body>
        <Card.Title>
          {station.name}
        </Card.Title>
        <Row>
            <Col lg={4}>
              {station.favicon 
                 ? 
                 <img alt={station.name}
                      src={station.favicon}
                      loading='lazy'
                      style={{width: '100%'}}
                />
                : <BiRadio size='100%' />
              }
            </Col>
            <Col lg={8}>
               <Card.Text>
                {station.homepage}
               </Card.Text>
            </Col>
        </Row>
     </Card.Body>
     <Card.Footer>
        <Button>Go to page</Button>
          <ToggleIconButton  active={isFavourite} onClick={onClick}/> 
     </Card.Footer>
    </Card>
  )
}