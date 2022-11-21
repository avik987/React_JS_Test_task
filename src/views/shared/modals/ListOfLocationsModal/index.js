import React from "react";
import PropTypes from "prop-types";
import { Empty, Modal } from "antd";
import { isEmpty } from "lodash";

import useContainer from "./hook";
import "antd/dist/antd.min.css";
import "../antdStyles.scss";
import "./style.scss";

const ListOfLocationsModal = ({ onClose }) => {
    const { locationList } = useContainer();

    return (
        <Modal
            open
            width={600}
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
                        <div className='row'>
                            <p className='text key'>Ip</p>
                            <p className='text key'>Coord_x</p>
                            <p className='text key'>Coord_y</p>
                        </div>
                        {locationList.map(({id, ip, coord_x, coord_y}) => (
                            <div className='row' key={id}>
                                <p className='text value'>{ip}</p>
                                <p className='text value'>{coord_x}</p>
                                <p className='text value'>{coord_y}</p>
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