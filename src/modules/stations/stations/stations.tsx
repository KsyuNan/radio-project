import {Tab, Tabs} from "react-bootstrap";
import React from "react";

export const Stations = () => {
    return (
        <Tabs defaultActiveKey='all-stations' className='mb-3'>
            <Tab eventKey='all-stations' title='Stations'></Tab>
            <Tab eventKey='favourites' title='Favourites'></Tab>
        </Tabs>
    )
}