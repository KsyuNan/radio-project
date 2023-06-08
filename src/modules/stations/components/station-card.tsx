import { Card, Col, Row, Button, ToggleButton} from 'react-bootstrap'
import { ToggleIconButton } from '../../../views/components/toggle-icon-button'


export const StationCard = () => {
  return (
    <Card>
     <Card.Body>
        <Card.Title></Card.Title>
        <Row>
            <Col lg={4}></Col>
            <Col lg={8}>
               <Card.Text></Card.Text>
            </Col>
        </Row>
     </Card.Body>
     <Card.Footer>
        <Button>Go to page</Button>
        <ToggleIconButton active onClick={onclick}/>
     </Card.Footer>
    </Card>
  )
}