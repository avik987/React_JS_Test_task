import React from "react";
import PropTypes from "prop-types";
import { Button, Empty, Modal } from "antd";
import { isEmpty } from "lodash";

import LocationMarkerIcon from "assets/svg/LocationMarkerIcon";
import useContainer from "./hook";
import "antd/dist/antd.min.css";
import "../antdStyles.scss";
import "./style.scss";

const ListOfLocationsModal = ({ onClose }) => {
    const { locationList, handleShowMap } = useContainer();

    return (
        <Modal
            open
            width={750}
            onCancel={onClose}
            centered
            mask={false}
            title='List of locations'
            className='listOfLocationsModal'
            footer={null}
        >
            <div className='modalContent'>
                {!isEmpty(locationList) ? (
                    <>
                        <div className='row titleRow'>
                            <span className='item'><p className='text key ipKey'>Ip</p></span>
                            <span className='item'><p className='text key'>Coord_x</p></span>
                            <span className='item'><p className='text key'>Coord_y</p></span>
                        </div>
                        {locationList.map(({id, ip, coord_x, coord_y}) => (
                            <div className='row' key={id}>
                                <Button className='button' onClick={() => handleShowMap(coord_x, coord_y)}>
                                    <LocationMarkerIcon width={18} height={18} />
                                </Button>
                                <span className='item ipAddress'><p className='text value'>{ip}</p></span>
                                <span className='item'><p className='text value'>{coord_x}</p></span>
                                <span className='item'><p className='text value'>{coord_y}</p></span>
                            </div>
                        ))}
                    </>
                ) : <Empty />}
            </div>
        </Modal>
    );
};

ListOfLocationsModal.defaultProps = {
    onClose: undefined,
};

ListOfLocationsModal.propTypes = {
    onClose: PropTypes.func,
};

export default ListOfLocationsModal;