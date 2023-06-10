import { FC } from 'react'
import { Station } from '../../typedef'
import { Card, Col, Row} from 'react-bootstrap'
import { StationCardFooter } from '../station-card-footer/station-card-footer'
import { StationCardImg } from '../station-card-img'


interface Props {
  station: Station
}

export const StationCard: FC<Props> = ({station}) => {

  return (
    <Card>
     <Card.Body>
        <Card.Title>{station.name}</Card.Title>
        <Row>
            <Col lg={4}>
               <StationCardImg {...{ station }} />
            </Col>
            <Col lg={8}>
               <Card.Text>
                {station.homepage}
               </Card.Text>
            </Col>
        </Row>
     </Card.Body>
     <StationCardFooter {...{ station} } />
    </Card>
  )
}