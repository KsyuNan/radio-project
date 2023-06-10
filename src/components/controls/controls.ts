import { FC } from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { CountriesDropdown } from '../countries-dropdown/countries-dropdown'
import { ClearFavouriteBtn } from '../clear-favourite-btn/clear-favourite-btn'
import { Player } from '../player/player'
import './controls.scss'

export const Controls:FC = () => {
    return (

        <Container>    
          <Row>
          <Col md={4} className='ml-n-1'>
            <CountriesDropdown />
          </Col>
          <Col md={4} className='ml-n-1'>
            <ClearFavouriteBtn />
          </Col>
          <Col md={4} className='ml-n-1'>
            <Player />
          </Col>
          </Row>
        </Container>
    )
}