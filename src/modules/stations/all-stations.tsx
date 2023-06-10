import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { StationCard } from '../../components/station-card/station-card';
import { useAppDispatch, useAppSelector } from '../../hooks/store-typed-hook/store-typed-hooks';
import { addSelectedCountry } from '../../services/actions/add-selected-country';
import { fetchStations } from '../../services/thunks/fetch-stations';

export const AllStations = () => {
    const dispatch = useAppDispatch()
    const stations = useAppSelector((state) => state.stations.data)
    const selectedCountries = useAppSelector((state) => state.countries.selectedCountries);
    const activeCountry = useAppSelector((state) => state.countries.activeCountry);

    useEffect(() => {
        if(!selectedCountries[activeCountry]) {
            dispatch(fetchStations(activeCountry))
        }
    }, [activeCountry])

    useEffect(() => {
    if (stations.length) {
      dispatch(addSelectedCountry({ 
        id: activeCountry, 
        value: stations }));
    }
  }, [stations]);

    return (
        <Row xs={1} md={2} className='g-4'>
        {selectedCountries[activeCountry] && (selectedCountries[activeCountry].map((station:any) => (
            <Col key={station.stationuuid}>
             <StationCard station={station}/>
            </Col>
        ) ))
        }
        </Row>
    )
}