import {Tab, Tabs} from "react-bootstrap";
import React from "react";
import { AllStations } from "../all-stations/all-stations";
import { FavouriteStations } from '../favorite-station/favourite-stations'

export const Stations = () => {
    return (
        <Tabs defaultActiveKey='all-stations' className='mb-3'>
            <Tab eventKey='all-stations' title='Stations'>
                <AllStations/>
            </Tab>
            <Tab eventKey='favourites' title='Favourites'>
                <FavouriteStations />
            </Tab>
        </Tabs>
    )
}