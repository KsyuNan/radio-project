import {useEffect} from 'react'
import {Col, Row} from 'react-bootstrap'
import { StationCard } from '../components/station-card';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { loadStation } from '../../../services/actions';
import { getStations } from '../../../services/selectors';
import { loadCountries } from '../../../services/countries';



export const AllStations = () => {
    const dispatch = useAppDispatch()
    const stations = useAppSelector(state => getStations(state).all)
    const countries = useAppSelector(state => state.countries.all)

   useEffect(() => {
    dispatch(loadStation())
   }, [])

   useEffect(() => {
    dispatch(loadCountries())
   }, [])

   console.log(stations)

    return (
        <Row xs={1} md={2} className='g-4'>
        {stations.map(station => (
         <Col key={station.stationuuid}>
            <StationCard  station={station}/>
         </Col>
         ))
        }
        </Row>
    )
}