import {Col, Row} from "react-bootstrap";
import { useAppSelector } from "../../hooks/store-typed-hook/store-typed-hooks";
import { StationCard } from "../../components/station-card/station-card";

export const FavouriteStations = () => {
  const favourites = useAppSelector((state) => state.stations.favourites)

    return (
      <Row xs={1} md={2} className="g-4">
      {favourites.map((station:any) => (
        <Col key={station.stationuuid}>
          <StationCard station={station} />
        </Col>
      ))}
    </Row>
    )
}