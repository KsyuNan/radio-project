import { AppState } from "../store/store";

export const getStations = (state: AppState) => state.stations

export const getFavourites = (state:AppState) => {
    const stations = getStations(state)
    const favouritesIds = stations.favourites
    return stations.all.filter(station => favouritesIds[station.stationuuid])
}