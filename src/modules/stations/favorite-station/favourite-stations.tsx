import {Col, Row} from "react-bootstrap";
import { useAppSelector } from "../../../store/hooks";
import { getFavourites } from '../../../services/selectors'
import { StationCard } from "../components/station-card";



export const FavouriteStations = () => {
  const favourites = useAppSelector(getFavourites)

  if (!favourites.length) {
    return <div>Your favourites list is empty.</div>
  }

    return (
      <Row xs={1} md={2} className="g-4">
        {favourites.map(station => (
          <Col key={station.stationuuid}>
          <StationCard station={station}/>
          </Col>
        ))
        }
      </Row>
    )
}