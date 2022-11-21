import React from "react";
import { Button } from "antd";

import useContainer from "./hook";
import "antd/dist/antd.min.css";
import "./style.scss";

const Locations = () => {
    const { showLocationModal, showListLocationModal, loader } = useContainer();

    return (
        <div className='locationsPage'>
            <div className='buttons'>
                <Button
                    onClick={showLocationModal}
                    className='button openMapButton'
                >
                    Open map
                </Button>
                <Button
                    onClick={showListLocationModal}
                    className='button showLocationsButton'
                    loading={loader}
                >
                    Show locations
                </Button>
            </div>
        </div>
    )
};

export default Locations;