import React from 'react';
import {Col, Row} from 'react-bootstrap'
import { StationCard } from '../components/station-card';
export const AllStations = () => {
    return (
        <Row xs={1} md={2} className='g-4'>
         <Col>
            <StationCard />
         </Col>
        </Row>
    )
}